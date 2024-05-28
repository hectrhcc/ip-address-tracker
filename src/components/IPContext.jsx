import { createContext, useState } from 'react';

export const IPContext = createContext();

export function IPProvider({ children }) {
  const [ip, setIp] = useState('');

  return (
    <IPContext.Provider value={{ ip, setIp }}>
      {children}
    </IPContext.Provider>
  )
}