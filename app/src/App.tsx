import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import Box from '@mui/material/Box';
import { About } from './Components/ContentForAbout';
import { Help } from './Components/ContentForHelp';
import Index from './Components/ContentResult';
import { SideBarContent } from './Components/SideBarContent';
import { SideBarStyleType } from './configs/types';
import { GlobalStyles, useStyles } from './constants/GlobalStyles';
import { TintProvider } from './contexts/GraphContext';
import { useDimensions } from './Hooks/useDimensions';
import { useSettingsContext } from './Hooks/useSettings';
import { useStepContext } from './Hooks/useStep';
import { MainComponent } from './Layouts/MainComponent';

function App() {
  const classes = useStyles();
  const { activeStep } = useStepContext();
  const { settings } = useSettingsContext();
  const { innerHeight, innerWidth } = useDimensions();

  const sideBarStyle: SideBarStyleType | any = {
    ...GlobalStyles.sideBar,
    backgroundColor: settings.themeColor,
  };

  const renderMainContent = () => {
    switch (activeStep) {
      case 'STEP-0':
        return <MainComponent />;
      case 'STEP-1':
        return <MainComponent />;
      case 'STEP-2':
        return <MainComponent />;
      case 'STEP-3':
        return <Index />;
      case 'STEP-4':
        return 'component 4';
      case 'STEP-5':
        return <Help/>;
      case 'STEP-6':
        return <About/>;
      default:
        return 'a default component here!';
    }
  };

  return (
    <TintProvider>
      <Box
        sx={{ backgroundColor: settings.globalColors.lowGray.main }}
        display={'flex'}
        flexDirection={'row'}
      >
        <Box
          className={classes.animatedBox}
          width={(innerWidth * 20) / 100}
          sx={sideBarStyle}
          height={innerHeight - (0.31 * innerHeight) / 100}
        >
          <SideBarContent />
        </Box>
        <Box width={innerWidth - (innerWidth * 20) / 100}>
          {renderMainContent()}
        </Box>
      </Box>
    </TintProvider>
  );
}

export default App;
