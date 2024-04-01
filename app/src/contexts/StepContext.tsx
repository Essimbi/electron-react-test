import { ReactNode, createContext, useState } from 'react';

export type StepType = 'STEP-0' | 'STEP-1' | 'STEP-2' | 'STEP-3' | 'STEP-4';
export type StepPayloadType = {};

export type StepContentType = {
  previewStep: StepType;
  payload: StepPayloadType;
};

export type initialStepType = {
  [key in StepType]: StepContentType;
};

const initialActyiveStep: StepType = 'STEP-0';
const initialStep: initialStepType = {
  'STEP-0': {
    previewStep: 'STEP-0',
    payload: {},
  },
  'STEP-1': {
    previewStep: 'STEP-0',
    payload: {},
  },
  'STEP-2': {
    previewStep: 'STEP-1',
    payload: {},
  },
  'STEP-3': {
    previewStep: 'STEP-2',
    payload: {},
  },
  'STEP-4': {
    previewStep: 'STEP-3',
    payload: {},
  },
};

export type StepContextType = {
  steps: initialStepType;
  setStep: (data: initialStepType) => void;
  activeStep: StepType;
  setActiveStep: (data: StepType) => void;
};

export const StepContextValue = createContext<StepContextType>({
  steps: initialStep,
  setStep: () => null,
  activeStep: initialActyiveStep,
  setActiveStep: () => null,
});

export const StepContextProvider = ({ children }: { children: ReactNode }) => {
  const [steps, setStep] = useState<initialStepType>({
    ...initialStep,
  });
  const [activeStep, setActiveStep] = useState<StepType>(initialActyiveStep);

  return (
    <StepContextValue.Provider
      value={{ steps, setStep, activeStep, setActiveStep }}
    >
      {children}
    </StepContextValue.Provider>
  );
};
