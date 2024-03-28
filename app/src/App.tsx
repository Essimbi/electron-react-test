import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { useSettingsContext } from './Hooks/useSettings';

function App() {
  const { settings } = useSettingsContext();
  return <div className="App">welcome in the {settings.mode}!</div>;
}

export default App;
