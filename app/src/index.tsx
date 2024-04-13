import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SettingsProvider } from './contexts/SettingsContext';
import { ThemeProvider } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react';
import { StepContextProvider } from './contexts/StepContext';
import { theme } from './configs/themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: '#008080',
              dark: '#008080',
            },
          },
        }}
      >
        <SettingsProvider>
          <StepContextProvider>
            <App />
          </StepContextProvider>
        </SettingsProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
