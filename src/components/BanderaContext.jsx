import { createContext, useState } from 'react';

export const BanderaContext = createContext();

export function BanderaProvider({ children }) {
  const [bandera, setBandera] = useState(0);

  return (
    <BanderaContext.Provider value={{ bandera, setBandera }}>
      {children}
    </BanderaContext.Provider>
  )
}