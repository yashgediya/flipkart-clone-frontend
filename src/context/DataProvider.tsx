import React, { createContext, useState } from "react";

export const DataContext: any = createContext(null);
const DataProvider = ({ children }: any) => {
  const [account, setAccount]: any = useState("");

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
