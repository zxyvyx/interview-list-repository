import { ActiveUserProvider } from '../contexts/ActiveUserContext';
import { LoaderProvider } from '../contexts/LoaderContext';
import { SearchResultProvider } from '../contexts/SearchResultContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ActiveUserProvider>
      <SearchResultProvider>
        <LoaderProvider>
          <Component {...pageProps} />
        </LoaderProvider>
      </SearchResultProvider>
    </ActiveUserProvider>
  );
}

export default MyApp;
