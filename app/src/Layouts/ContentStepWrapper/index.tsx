import { Box } from '@mui/material';
import { DonneesPiecesForm } from '../../Components/ContenSteperWraperDonneesPieces';
import { useStepContext } from '../../Hooks/useStep';

export const ContentStepWrapper = () => {
  let result: any;

  switch (activeStep) {
    case 'STEP-0':
      result = <DonneesPiecesForm />;
      break;
    case 2:
      result = 'second form component';
      break;

    default:
      break;
  }

  return <Box>{result}</Box>;
};
