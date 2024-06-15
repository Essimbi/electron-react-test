import React, { createContext, useContext, useState } from 'react';
import { SingleModel } from '../Layouts/modelpredefinisImg/modelImg';

interface ModelContextType {
    ModelData: SingleModel | undefined;
    updateModelData: (newData: SingleModel | undefined) => void;
}

export const ModelContext = createContext<ModelContextType>({
    ModelData: undefined,
    updateModelData: () => {},
});

export const useModelContext = () => useContext(ModelContext);

export const ModelProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [ModelData, setModelData] = useState<SingleModel | undefined>();

    const updateModelData = (newData: SingleModel | undefined) => {
      if(newData !== undefined) {
          setModelData(prevData => ({...prevData, ...newData}));
      }
    };

    return (
        <ModelContext.Provider value={{ ModelData, updateModelData }}>
            {children}
        </ModelContext.Provider>
    );
};
