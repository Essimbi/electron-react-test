import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { useSettingsContext } from './Hooks/useSettings';
import SliderBar from './sliderBar/SliderBar';

function App() {
  const { settings } = useSettingsContext();
  return(
    <>
      
    <SliderBar />
    </>
  )
}

export default App;
