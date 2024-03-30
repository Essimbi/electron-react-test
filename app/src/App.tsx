import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import { RouterWrapper } from './RouterWrapper';
import Box from '@mui/material/Box';
import { useDimensions } from './Hooks/useDimensions';
import { useSettingsContext } from './Hooks/useSettings';
import { GlobalStyles, useStyles } from './constants/GlobalStyles';
import { SideBarStyleType } from './configs/types';

function App() {
  const classes = useStyles();
  const { settings } = useSettingsContext();
  const { innerHeight, innerWidth } = useDimensions();

  const sideBarStyle: SideBarStyleType | any = {
    ...GlobalStyles.sideBar,
    backgroundColor: settings.themeColor,
  };

 
  return (
    <Box display={'flex'} flexDirection={'row'}>
      <Box
        className={classes.animatedBox}
        width={(innerWidth * 20) / 100}
        sx={sideBarStyle}
        height={innerHeight - (0.31 * innerHeight) / 100}
      ></Box>
      <Box width={(innerWidth)-((innerWidth * 20) / 100)}>
        <RouterWrapper />
      </Box>
    </Box>
  );
}

export default App;
