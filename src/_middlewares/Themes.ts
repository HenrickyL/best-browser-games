export interface Theme {
  text: string,
  contrast: string,
  contrastLight?: string,

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
  contrastLight: '#a0a0a0',
  text: '#000',
  background: '#F1F3FB',
  backgroundSnd: '#F3D68Bff',
  backgroundTer: '#F6B756ff',
  black: '#000000',
  black2: '#2a2a2a',
  black3: '#4a4a4a',
  white: '#FEFFFE',
  white2: '#F0F0F0',
  white3: '#EFEFEF',
  gray: '#6C6C6D',
  primary: '#583D72',
  secondary: '#926386ff',
  secondaryLight: '#936625ff',
  tertiary: '#FB8C50ff',
};

export const darkTheme: Theme = {
  text: '#fff',
  contrast: '#fff',
  contrastLight: '#dcdcdc',
  background: '#222',
  backgroundSnd: '#444',
  backgroundTer: '#666',
  black: '#fff',
  black2: '#ccc',
  black3: '#999',
  white: '#000',
  white2: '#333',
  white3: '#666',
  gray: '#888',
  primary: '#337ab7',
  secondary: '#5bc0de',
  secondaryLight: '#5bc0de',
  tertiary: '#5bc0de',
};


export abstract class ThemeController{ 
  private static _currentTheme: Theme = lightTheme
  private static _isLight : boolean = true
  public static getTheme(): Theme {
    return ThemeController._currentTheme
  }

  public static toggle():void{
    ThemeController._isLight = !ThemeController._isLight
    console.log(ThemeController._isLight)
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