import { Box } from '@mui/material';
import { useStepContext } from '../../Hooks/useStep';
import { InformForm } from '../../Components/ContentStepWrapperInscriptionForm';
import { DonneMetheo } from '../../Components/contentStepWrapperDonneMetheo';
import './style.css';
import { useEffect } from 'react';
import { DonneesPiecesCategoryWrapper } from '../DonneesPiecesCategoryWrapper';
import Index from '../../Components/ContentResult';

export const ContentStepWrapper = () => {
  let result: any;

  const { activeStep } = useStepContext();
  console.log(activeStep);
  switch (activeStep) {
    case 'STEP-0':
      result = <InformForm />;
      break;
    case 'STEP-1':
      result = <DonneesPiecesCategoryWrapper />;
      break;
    case 'STEP-2':
      result = <DonneMetheo />;
      break;
    case 'STEP-3':
      result = <Index />;
      break;
    case 'STEP-4':
      result = 'second form component';
      break;

    default:
      break;
  }

  useEffect(() => {}, [activeStep]);
  return (
    <Box width={'100%'} height={'100%'}>
      {result}
    </Box>
  );
};
