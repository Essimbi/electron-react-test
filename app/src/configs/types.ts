export type ContentWidth = useDimensionsType;

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type LanguageType = 'fr' | 'en';

export type Settings = {
  mode: 'dark' | 'white';
  themeColor: ThemeColor;
  contentWidth: ContentWidth;
  language: LanguageType;
  globalColors: any
};
export type SideBarContentItemType = {
  label: String
  icon: String
}
export type SideBar = {
  boxShadow: String;
  background: String;
};

export type GlobalStylesType = {
  sideBar: SideBar;
};

export type SideBarStyleType = {
  backgroundColor: String;
  boxShadow: String;
  background: String;
};

export type useDimensionsType = {
  innerHeight: number;
  innerWidth: number;
};

export type CategoryValueType = 1 | 2 | 3 | 4
