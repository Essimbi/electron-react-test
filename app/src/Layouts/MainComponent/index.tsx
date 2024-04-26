import React from 'react';
import { StepperComponent } from '../../Components/stepperComponent';
import { Box } from '@mui/material';
import { ContentStepWrapper } from '../ContentStepWrapper';
import { useDimensions } from '../../Hooks/useDimensions';
import ChooseLang from '../../Components/ChooseLang';
import { useTranslation } from "react-i18next";

export const MainComponent = () => {
  const { innerHeight, innerWidth } = useDimensions();
  const { t } = useTranslation();

  return (
    <Box
      width={innerWidth - (innerWidth * 20) / 100}
      height={innerHeight - (0.31 * innerHeight) / 100}
      padding={3}
    >
      <Box
        width={'100%'}
        borderRadius={2}
        height={'100%'}
        sx={{
          backgroundColor: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <ChooseLang />
        <p>{t('common.translated-text')}</p>
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
    </Box>
  );
};
