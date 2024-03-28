export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type ContentWidth = 'full' | 'boxed';

export type Settings = {
  mode: 'dark' | 'white';
  themeColor: ThemeColor;
  contentWidth: ContentWidth;
  language: string;
};
