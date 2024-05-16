// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface InputErrorContextType {
//     erreur: string | null;
//     setErreur: (erreur: string | null) => void;
// }

// const InputErrorContext = createContext<InputErrorContextType>({
//     erreur: null,
//     setErreur: () => {},
// });

// export const useInputError = () => useContext(InputErrorContext);

// export const InputErrorProvider = ({ children }: { children: ReactNode }) => {
//     const [erreur, setErreur] = useState<string | null>(null);

//     return (
//         <InputErrorContext.Provider value={{ erreur, setErreur }}>
//             {children}
//         </InputErrorContext.Provider>
//     );
// };

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InputErrorContextType {
  erreur: string;
  setErreur: React.Dispatch<React.SetStateAction<string>>;
}

const InputErrorContext = createContext<InputErrorContextType | undefined>(undefined);

export const useInputError = () => {
  const context = useContext(InputErrorContext);
  if (!context) {
    throw new Error('useInputError must be used within a InputErrorProvider');
  }
  return context;
};

interface InputErrorProviderProps {
  children: ReactNode;
}

export const InputErrorProvider: React.FC<InputErrorProviderProps> = ({ children }) => {
  const [erreur, setErreur] = useState('data');

  return (
    <InputErrorContext.Provider value={{ erreur, setErreur }}>
      {children}
    </InputErrorContext.Provider>
  );
};
