import React, { ReactNode, createContext, useState } from 'react';

export type DataType = number[] | undefined ;

export type DataGraphType = {
  dataGraph: DataType,
  setDataGraph: (data: DataType) => void;
} ;

// export type initialStepType = {
//   [key in DataGraphType]: DataType;
// };



export const DataGraphContext = createContext<DataGraphType>({
  dataGraph : [],
  setDataGraph: () => null
}); // Tableau vide comme valeur par défaut

export const  DataGraphProvider = ({ children } : { children: ReactNode }) => {
  const  [dataGraph, setDataGraph] = useState<DataType>()
  const handleUpdateDataGraph = (newData: DataType) => {
    setDataGraph(newData);
  }
  return (
    <DataGraphContext.Provider
      value={{ dataGraph, setDataGraph: handleUpdateDataGraph }}
    >
      {children}
    </DataGraphContext.Provider>
  );

}
