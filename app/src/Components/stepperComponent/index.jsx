import {
  Stack,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  useSteps,
} from '@chakra-ui/react';

import { useSettingsContext } from '../../Hooks/useSettings';
import { useStepContext } from '../../Hooks/useStep';
import { CloudIcon, DomainIcon, HomeIcon } from '../../img/Icons/iconItems';
import { useTranslation } from "react-i18next";

const steps = [
  { title: 'steper.batiment', description: 'Contact Info' },
  { title: 'steper.piece', description: 'Date & Time' },
  { title: 'steper.donnees-meteorologique', description: 'Select Rooms' },
];

export const StepperComponent = () => {
  const { settings } = useSettingsContext();
  const { activeStep } = useStepContext();
  const { t } = useTranslation();
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
        colorScheme="gray"
      >
        {steps.map((step, index) => (
          <div>
            <Step
              key={index}
              gap="0"
              mt={index === 0 ? 4 : index === 1 ? 4 : 8}
            >
              <StepIndicator>
                <StepStatus
                  complete={
                    index === 0 ? (
                      <HomeIcon sx={{ color: 'white' }} />
                    ) : index === 1 ? (
                      <DomainIcon sx={{ color: 'white' }} />
                    ) : (
                      <CloudIcon sx={{ color: 'white' }} />
                    )
                  }
                  incomplete={
                    index === 0 ? (
                      <HomeIcon sx={{ color: 'gray' }} />
                    ) : index === 1 ? (
                      <DomainIcon sx={{ color: 'gray' }} />
                    ) : (
                      <CloudIcon sx={{ color: 'gray' }} />
                    )
                  }
                  active={
                    index === 0 ? (
                      <HomeIcon sx={{ color: 'gray' }} />
                    ) : index === 1 ? (
                      <DomainIcon sx={{ color: 'gray' }} />
                    ) : (
                      <CloudIcon sx={{ color: 'gray' }} />
                    )
                  }
                />
              </StepIndicator>
              <StepSeparator _horizontal={{ ml: 0, w: [10, 20, 40, 60, 80] }} />
            </Step>
            <Text
              fontSize="sm"
              mt={2}
              ml={index === 0 ? 0 : index === 1 ? -8 : -4}
            >
              {t(`${step.title}`)}
            </Text>
          </div>
        ))}
      </Stepper>
    </Stack>
  );
};
