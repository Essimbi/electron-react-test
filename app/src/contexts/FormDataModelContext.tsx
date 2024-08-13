import React, { createContext, useContext, useState } from 'react';
import { FormDataType } from '../Layouts/modelpredefinisImg/modelImg';


interface IModelContext  {
  formData: FormDataType | undefined;
  updateFormData: (newData: FormDataType | undefined) => void;
}

export const FormDataContext = createContext<IModelContext>({
    formData: undefined,
    updateFormData: ( ) => {},
});

export const useFormDataContext = () => useContext(FormDataContext);

export const FormDataProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [formData, setModelData] = useState<FormDataType>();

    const updateFormData = (newData: FormDataType | undefined) => {
      if(newData !== undefined) {
        setModelData(prevData => ({...prevData, ...newData}));
      }
    };

    return (
        <FormDataContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};
