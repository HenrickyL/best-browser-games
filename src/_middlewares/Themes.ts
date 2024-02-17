interface ThemeSettings{
  fastTransition?: number,
  normalTransition: number,
  slowTransition?: number,
  iconSize: number,

}
interface ThemeNotification{
  success: string,
  warning: string,
  error: string,
  report: string,
}

interface ThemeInputsSettings{
  background: string
}

export interface Theme {
  text: string,
  text2?: string,
  text3?: string,

  contrast: string,
  contrastLight?: string,

  settings:ThemeSettings,
  input: ThemeInputsSettings,

  notification: ThemeNotification,

  background: string;
  backgroundSnd: string;
  backgroundTer: string;
  black: string;
  black2: string;
  black3: string;
  white: string;
  white2: string;
  white3: string;
  gray: string;
  primary: string;
  primaryLight?: string;
  secondary: string;
  secondaryLight?: string;
  tertiary?: string;
  tertiaryLight?: string;
}

export const lightTheme: Theme = {
  contrast: '#000',
  contrastLight: '#222',
  text: '#000',
  background: '#afafaf',
  backgroundSnd: '#aaaa',
  backgroundTer: '#F6B756ff',
  black: '#000000',
  black2: '#2a2a2a',
  black3: '#4a4a4a',
  white: '#FEFFFE',
  white2: '#F0F0F0',
  white3: '#EFEFEF',
  gray: '#6C6C6D',
  primary: '#0f0',
  primaryLight: '#29fd53',
  secondary: '#926386ff',
  secondaryLight: '#936625ff',
  tertiary: '#FB8C50ff',

  input: {
    background: "#fff",
  },
  settings:{
    normalTransition: 400,
    iconSize: 20
  },
  notification:{
    success: '#2ecc71',
    warning: '#f39c12',
    error: '#e74c3c',
    report: '#3498db',
  }
};

export const darkTheme: Theme = {
  text: '#fff',
  contrast: '#fff',
  contrastLight: '#aaa',
  background: '#2f363e',
  backgroundSnd: '#1e252d',
  backgroundTer: '#666',
  black: '#fff',
  black2: '#ccc',
  black3: '#999',
  white: '#000',
  white2: '#333',
  white3: '#666',
  gray: '#888',
  primary: '#0f0',
  primaryLight: '#29fd53',
  secondary: '#5bc0de',
  secondaryLight: '#5bc0de',
  tertiary: '#5bc0de',

  settings:{
    normalTransition: 400,
    iconSize: 20
  },
  input:{
    background: '#6a6a6a'
  },
  notification:{
    success: '#2ecc71',
    warning: '#f39c12',
    error: '#e74c3c',
    report: '#3498db',
  }
};


export abstract class ThemeController{ 
  private static _currentTheme: Theme = lightTheme
  private static _isLight : boolean = true
  public static getTheme(): Theme {
    return ThemeController._currentTheme
  }

  public static toggle():void{
    ThemeController._isLight = !ThemeController._isLight
    ThemeController.setTheme(ThemeController._isLight ? 'light' : 'dark')
  }

  public static setTheme(value : 'dark' | 'light'):void{
    if(value === 'dark'){
      ThemeController._currentTheme = darkTheme
    }else{
      ThemeController._currentTheme = lightTheme
    }
  }
}