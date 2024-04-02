import { Box } from '@mui/material';
// import { InformForm } from '../../Components/ContentStepWrapperInscriptionForm';
import { DonneesPiecesForm } from '../../Components/ContenSteperWraperDonneesPieces';

export const ContentStepWrapper = () => {
  let result: any;
  const step = '1';
  switch (parseInt(step)) {
    case 1:
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
