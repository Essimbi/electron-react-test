import React, { createContext, useContext, useState } from 'react';
import { CardImg } from '../Layouts/modelpredefinisImg/modelImg';

interface ModelContextType {
    ModelData: CardImg[];
    updateModelData: (newData: CardImg) => void;
}

export const ModelContext = createContext<ModelContextType>({
    ModelData: [],
    updateModelData: () => {},
});

export const useModelContext = () => useContext(ModelContext);

export const ModelProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [ModelData, setModelData] = useState<CardImg[]>([]);

    const updateModelData = (newData: CardImg) => {
        setModelData(prevData => [...prevData, newData]); // Ajouter les nouvelles données au tableau existant
    };

    return (
        <ModelContext.Provider value={{ ModelData, updateModelData }}>
            {children}
        </ModelContext.Provider>
    );
};