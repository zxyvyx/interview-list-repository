import { createContext, useMemo, useState } from 'react';

const SearchResultContext = createContext();

export function SearchResultProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const userMemo = useMemo(
    () => ({ searchResult, setSearchResult }),
    [searchResult]
  );

  return (
    <SearchResultContext.Provider value={userMemo}>
      {children}
    </SearchResultContext.Provider>
  );
}

export default SearchResultContext;
