import { createContext, useMemo, useState } from 'react';

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [onLoading, setOnLoading] = useState(null);
  const userMemo = useMemo(() => ({ onLoading, setOnLoading }), [onLoading]);

  return (
    <LoaderContext.Provider value={userMemo}>{children}</LoaderContext.Provider>
  );
}

export default LoaderContext;
