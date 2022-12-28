import Head from 'next/head';
import { useContext, useState } from 'react';
import Alert from '../components/Alert';
import SearchBox from '../components/SearchBox';
import ActiveUserContext from '../contexts/ActiveUserContext';
import LoaderContext from '../contexts/LoaderContext';
import SearchResultContext from '../contexts/SearchResultContext';

export default function Home() {
  const { onLoading, setOnLoading } = useContext(LoaderContext);
  const { setSearchResult } = useContext(SearchResultContext);
  const { setSelectedUser } = useContext(ActiveUserContext);
  const [alert, setAlert] = useState({
    alertTitle: '',
    alertMessage: '',
  });

  const getUserLists = async (value) => {
    setOnLoading({ ...onLoading, searchUser: true });
    const endpoint = `/search/users?${new URLSearchParams(value)}`;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
      },
    })
      .then(async (response) => {
        if (response.status === 200) return Promise.resolve(response.json());
        const responseInJson = await Promise.resolve(response.json());
        return Promise.reject(responseInJson);
      })
      .then(
        (result) => {
          const temp = result.items.map((item) => ({
            id: item.id,
            name: item.login,
            image: item.avatar_url,
          }));
          setSearchResult(temp);
          setAlert({
            alertTitle: '',
            alertMessage: '',
          });
        },
        (error) => {
          setAlert({
            alertTitle: 'Error',
            alertMessage: error.message,
          });
          setSearchResult([]);
        }
      )
      .catch((catchError) => {
        setAlert({
          alertTitle: 'Error',
          alertMessage: catchError.message,
        });
        setSearchResult([]);
      })
      .finally(() => {
        setOnLoading({ ...onLoading, searchUser: false });
      });
  };

  const getRepositoriesByUser = async (username, id) => {
    setOnLoading({ ...onLoading, listRepository: true });
    const endpoint = `/users/${username}/repos`;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
      },
    })
      .then(async (response) => {
        if (response.status === 200) return Promise.resolve(response.json());
        const responseInJson = await Promise.resolve(response.json());
        return Promise.reject(responseInJson);
      })
      .then(
        (result) => {
          const temp = result.map((item) => ({
            id: item.id,
            link: item.html_url,
            name: item.name,
            stars: item.stargazers_count,
            language: item.language,
            dateModified: item.updated_at,
          }));
          const tempUser = {
            name: username,
            id,
            repo: temp,
          };
          setSelectedUser(tempUser);
          setAlert({
            alertTitle: '',
            alertMessage: '',
          });
        },
        (error) => {
          setAlert({ alertTitle: 'Error', alertMessage: error.message });
          setSearchResult(null);
        }
      )
      .catch((catchError) => {
        setAlert({ alertTitle: 'Error', alertMessage: catchError.message });
        setSearchResult(null);
      })
      .finally(() => {
        setOnLoading({ ...onLoading, listRepository: false });
      });
  };

  return (
    <>
      <Head>
        <title>Hasymi Al Hamdi - Front End Interview</title>
        <meta
          name='description'
          content='Interview Front End React JS - Next JS - Hasymi Al Hamdi'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mx-auto max-w-4xl px-2 sm:px-6 md:px-10'>
        <div className='font-inter text-2xl font-bold text-teal-500'>
          Interview React JS - Next JS
        </div>
        <SearchBox
          onSubmit={getUserLists}
          onSelectUser={getRepositoriesByUser}
        />
        {alert.alertTitle || alert.alertMessage ? (
          <Alert title={alert.alertTitle} message={alert.alertMessage} />
        ) : null}
      </main>
    </>
  );
}
