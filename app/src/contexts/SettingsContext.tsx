import { ReactNode, createContext, useState } from 'react';
import { Settings } from '../configs/types';
import { GlobalColors } from '../constants/GlobalStyles';

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: 'dark',
  globalColors: GlobalColors,
  contentWidth: {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  },
  language: 'fr',
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, saveSettings] = useState<Settings>({
    ...initialSettings,
  });

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
