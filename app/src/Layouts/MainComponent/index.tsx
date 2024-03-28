import React from 'react';
//import { useSettingsContext } from '../../Hooks/useSettings';
import { StepperComponent } from '../../Components/stepperComponent';
import { Box } from '@mui/material';
import { ContentStepWrapper } from '../ContentStepWrapper';

export const MainComponent = () => {
  //const { settings } = useSettingsContext();
  return (
    <Box>
      <StepperComponent />
      <ContentStepWrapper />
    </Box>
  );
};
