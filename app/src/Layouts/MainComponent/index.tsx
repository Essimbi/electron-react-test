import React from 'react';
//import { useSettingsContext } from '../../Hooks/useSettings';
import { StepperComponent } from '../../Components/stepperComponent';
import { Box } from '@mui/material';
import { ContentStepWrapper } from '../ContentStepWrapper';
import { useDimensions } from '../../Hooks/useDimensions';

export const MainComponent = () => {
  //const { settings } = useSettingsContext();
  const { innerHeight, innerWidth } = useDimensions();
  return (
    <Box
      width={innerWidth - (innerWidth * 20) / 100}
      height={innerHeight - (0.31 * innerHeight) / 100}
    >
      <Box
        height={'15%'}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <StepperComponent />
      </Box>
      <Box height={'85%'}>
        <ContentStepWrapper />
      </Box>
    </Box>
  );
};
