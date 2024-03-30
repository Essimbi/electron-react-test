import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SettingsProvider } from './contexts/SettingsContext';
import { ThemeProvider } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
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
          <App />
        </SettingsProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
