import { Box } from '@mui/material';
import { DonneesPiecesForm } from '../../Components/ContenSteperWraperDonneesPieces';
import { useStepContext } from '../../Hooks/useStep';

export const ContentStepWrapper = () => {
  let result: any;

  const { activeStep } = useStepContext();

  switch (activeStep) {
    case 'STEP-0':
      result = <DonneesPiecesForm />;
      break;
    case 'STEP-1':
      result = 'second form component';
      break;
    case 'STEP-2':
      result = 'second form component';
      break;
    case 'STEP-3':
      result = 'second form component';
      break;
    case 'STEP-4':
      result = 'second form component';
      break;

    default:
      break;
  }

  return <Box>{result}</Box>;
};
