import {
  Stack,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  useSteps
} from '@chakra-ui/react';

import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { CloudIcon, DomainIcon, HomeIcon } from '../../img/Icons/iconItems';

const steps = [
  { title: 'Batiment', description: 'Contact Info' },
  { title: 'Constitution de la pièce', description: 'Date & Time' },
  { title: 'Données metheorologique', description: 'Select Rooms' },
];

export const StepperComponent = () => {
  const { settings } = useSettingsContext();
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
          <div>
            <Step key={index} gap="0" >
              <StepIndicator>
                <StepStatus complete={index === 0 ? <HomeIcon sx={{ color: 'blue' }} /> : index === 1 ? <DomainIcon sx={{ color: 'blue' }} /> : <CloudIcon sx={{ color: 'blue' }} />}
                  incomplete={index === 0 ? <HomeIcon sx={{ color: 'gray' }} /> : index === 1 ? <DomainIcon sx={{ color: 'gray' }} /> : <CloudIcon sx={{ color: 'gray' }} />}
                  active={index === 0 ? <HomeIcon sx={{ color: 'gray' }} /> : index === 1 ? <DomainIcon sx={{ color: 'gray' }} /> : <CloudIcon sx={{ color: 'gray' }} />} />
              </StepIndicator>
              <StepSeparator _horizontal={{ ml: 0, w: [10, 20, 40, 60, 80] }} />
            </Step>
            <Text fontSize="sm">{step.title}</Text>
          </div>
        ))}
      </Stepper>

    </Stack>
  );
};
