import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import TextField from '../TextField';
import searchIcon from '../../assets/search-icon.svg';
import SearchResultContext from '../../contexts/SearchResultContext';
import LoaderContext from '../../contexts/LoaderContext';
import ActiveUserContext from '../../contexts/ActiveUserContext';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function SearchBox({ onSubmit, onSelectUser }) {
  const { selectedUser, setSelectedUser } = useContext(ActiveUserContext);
  const { searchResult } = useContext(SearchResultContext);
  const { onLoading } = useContext(LoaderContext);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isInteract, setIsInteract] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let leftSideStyle = 'overflow-y-auto py-4 pl-0';
  if (isResultOpen) {
    leftSideStyle = `${leftSideStyle} hidden sm:flex sm:flex-col sm:gap-1 pr-3`;
  } else {
    leftSideStyle = `${leftSideStyle} col-span-1 sm:col-span-2 flex flex-col gap-1 pr-0`;
  }

  // create useEffect to check if the screen is mobile or not
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInteract(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (isMobile) {
      setIsResultOpen(false);
      setSelectedUser(null);
    }

    if (onSubmit) {
      onSubmit(data);
    }
  };

  const handleSelectUser = (username, id) => {
    if (onSelectUser) {
      onSelectUser(username, id);
    }
    setIsResultOpen(true);
  };

  const handleCloseRightPanel = () => {
    setIsResultOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className='flex max-h-96 flex-col rounded-2xl border p-3 shadow-lg'>
      <form onSubmit={handleSubmit}>
        <TextField
          type='search'
          id='users'
          name='q'
          onBlur={() => setIsInteract(true)}
          customInputStyle='border-b border-b-slate-200 focus:border-b-slate-400'
          placeholder='Enter username'
          iconLeft={<Image src={searchIcon} alt='' />}
          autoComplete='off'
          required
        />
      </form>
      {isInteract ? (
        <div className='grid h-full grid-cols-1 divide-x-0 overflow-hidden sm:grid-cols-2 sm:divide-x'>
          <div className={leftSideStyle}>
            <LeftPanel
              searchResults={searchResult}
              isLoading={onLoading?.searchUser}
              click={handleSelectUser}
              activeOption={selectedUser?.id}
            />
          </div>

          {isResultOpen ? (
            <RightPanel
              activeUsername={selectedUser?.name}
              listRepositories={selectedUser?.repo}
              isLoading={onLoading?.listRepository}
              onClose={handleCloseRightPanel}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
