import { ReactNode, createContext, useState } from 'react';

export type StepType = 'STEP-0' | 'STEP-1' | 'STEP-2' | 'STEP-3' | 'STEP-4';
export type subStepType =
  | 'STEP-1-0'
  | 'STEP-1-1'
  | 'STEP-1-2'
  | 'STEP-1-3'
  | 'STEP-1-4';
export type StepPayloadType = {};

export type StepContentType = {
  previewStep: StepType;
  activeSubstep: subStepType | String | undefined;
  payload: StepPayloadType | any;
};

export type initialStepType = {
  [key in StepType]: StepContentType;
};

const initialActyiveStep: StepType = 'STEP-0';
const initialStep: initialStepType = {
  'STEP-0': {
    previewStep: 'STEP-0',
    activeSubstep: undefined,
    payload: {},
  },
  'STEP-1': {
    previewStep: 'STEP-0',
    activeSubstep: 'STEP-1-0',
    payload: {},
  },
  'STEP-2': {
    previewStep: 'STEP-1',
    activeSubstep: undefined,
    payload: {},
  },
  'STEP-3': {
    previewStep: 'STEP-2',
    activeSubstep: undefined,
    payload: {},
  },
  'STEP-4': {
    previewStep: 'STEP-3',
    activeSubstep: undefined,
    payload: {},
  },
};

export type StepContextType = {
  steps: initialStepType;
  setStep: (data: initialStepType) => void;
  activeStep: StepType;
  setActiveStep: (data: StepType) => void;
  goToNextStep: (data: StepType) => void;
};

export const StepContextValue = createContext<StepContextType>({
  steps: initialStep,
  setStep: () => null,
  activeStep: initialActyiveStep,
  setActiveStep: () => null,
  goToNextStep: () => null,
});

export const StepContextProvider = ({ children }: { children: ReactNode }) => {
  const [steps, setStep] = useState<initialStepType>({
    ...initialStep,
  });
  const goToNextStep = (actualStep: StepType) => {
    let numberOfPieces = parseInt(steps['STEP-0'].payload.nombre_pieces);
    let totalIndex = numberOfPieces - 1;
    let actualIndex = parseInt(actualStep.split('-')[2]);
    if (actualIndex < totalIndex) {
      let ancianStep = steps;
      let nextIndex = actualIndex + 1;
      ancianStep['STEP-1'].activeSubstep = 'STEP-1-' + nextIndex;
    } else {
      setActiveStep('STEP-2');
    }
  };

  const [activeStep, setActiveStep] = useState<StepType>(initialActyiveStep);

  return (
    <StepContextValue.Provider
      value={{ steps, setStep, activeStep, setActiveStep, goToNextStep }}
    >
      {children}
    </StepContextValue.Provider>
  );
};
