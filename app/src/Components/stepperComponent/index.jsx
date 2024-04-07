import {
  Stack,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

import HomeIcon from '@mui/icons-material/Home';
import { useSettingsContext } from '../../Hooks/useSettings';
import { useEffect } from 'react';
import { useStepContext } from '../../Hooks/useStep';

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
];

export const StepperComponent = () => {
  const { settings  } = useSettingsContext();
  const { activeStep } = useStepContext();
  const { ac, setActiveStep } = useSteps({
    index: 3,
    count: steps.length,
  });

  const activeStepText = steps[activeStep]?.description;

  const computeStepperIndex = () => {
    switch (activeStep) {
      case 'STEP-0':
        return 0;
      case 'STEP-1':
        return 1;
      case 'STEP-2':
        return 2;
      default:
        return 0;
    }
  };

  return (
    <Stack
      display={'flex'}
      flexDir={'row'}
      justifyContent={'center'}
      width={'100%'}
    >
      <Stepper
        width={'75%'}
        bgColor={settings.themeColor}
        size="sm"
        index={computeStepperIndex()}
        gap="0"
      >
        {steps.map((step, index) => (
          <Step key={index} gap="0">
            <StepIndicator>
              <StepStatus complete={<HomeIcon />} />
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: 0 }} />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
