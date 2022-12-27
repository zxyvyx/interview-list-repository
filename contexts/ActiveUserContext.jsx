import { createContext, useMemo, useState } from 'react';

const ActiveUserContext = createContext();

export function ActiveUserProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const userMemo = useMemo(
    () => ({ selectedUser, setSelectedUser }),
    [selectedUser]
  );

  return (
    <ActiveUserContext.Provider value={userMemo}>
      {children}
    </ActiveUserContext.Provider>
  );
}

export default ActiveUserContext;
