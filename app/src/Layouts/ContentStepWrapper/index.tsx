import { Box } from '@mui/material';
// import { InformForm } from '../../Components/ContentStepWrapperInscriptionForm';
import { DonneMetheo } from '../../Components/contentStepWrapperDonneMetheo';

export const ContentStepWrapper = () => {
  let result: any;
  const step = '1';
  switch (parseInt(step)) {
    case 1:
      result = <DonneMetheo />;
      break;
    case 2:
      result = 'second form component';
      break;

    default:
      break;
  }

  return <Box>{result}</Box>;
};
