import { Box } from '@mui/material';
import { InformForm } from '../../Components/ContentStepWrapperInscriptionForm';
import { useStepContext } from '../../Hooks/useStep';

export const ContentStepWrapper = () => {
  const { activeStep } = useStepContext();
  let result: any;

  switch (activeStep) {
    case 'STEP-0':
      result = <InformForm />;
      break;
    case 'STEP-1':
      result = 'second form component';
      break;
    case 'STEP-2':
      result = 'third form component';
      break;
    case 'STEP-3':
      result = 'fourth form component';
      break;
    case 'STEP-4':
      result = 'fifth form component';
      break;

    default:
      break;
  }

  return <Box>{result}</Box>;
};
