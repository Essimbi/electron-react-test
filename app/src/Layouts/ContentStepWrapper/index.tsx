import { Box } from '@mui/material';

export const ContentStepWrapper = () => {
  let result = '';
  const step = '1';
  switch (parseInt(step)) {
    case 1:
      result = 'first form component';
      break;
    case 2:
      result = 'second form component';
      break;

    default:
      break;
  }

  return <Box>{result}</Box>;
};
