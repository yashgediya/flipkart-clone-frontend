import React, { createContext, useState } from "react";

const DataProvider = ({ children }: any) => {
  const DataContext: any = createContext(null);
  const [account, setAccount] = useState("");
  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
