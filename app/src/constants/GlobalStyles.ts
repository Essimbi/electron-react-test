import { GlobalStylesType } from '../configs/types';
import { makeStyles } from '@mui/styles';

/**
 * @description degrade sidebar
 */

export const GlobalStyles: GlobalStylesType = {
  sideBar: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    background: 'linear-gradient(to right, #008080, #09AFAF)',
  },
};

/**
 * @description animation sidebar
 */

export const useStyles = makeStyles({
  animatedBox: {
    width: '100px',
    height: '100px',
    animation: '$slideRight 0.4s ease-in-out',
  },
  '@keyframes slideRight': {
    '0%': {
      transform: 'translateX(-150px)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
});
