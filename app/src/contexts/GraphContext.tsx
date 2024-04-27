import React, { createContext, useContext, useState } from 'react';

interface TintContextType {
    TintData: number[];
    updateTintData: (newData: number[]) => void;
}

const TintContext = createContext<TintContextType>({
    TintData: [],
    updateTintData: () => [],
});

export const useTintContext = () => useContext(TintContext);

export const TintProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [TintData, setTintData] = useState<number[]>([]);

    const updateTintData = (newData: number[]) => {
        setTintData(newData);
    };

    return (
        <TintContext.Provider value={{ TintData, updateTintData }}>
            {children}
        </TintContext.Provider>
    );
};