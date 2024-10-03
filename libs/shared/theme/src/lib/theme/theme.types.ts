import type {
  AppSpace,
  AppColor,
  AppFontFamily,
  AppFontWeight,
  AppScreens,
  AppComponent,
  AppFontSizes,
} from './tokens';

export type AppSpacesTheme = {
  space: AppSpace;
};

export type AppColorTheme = {
  color: AppColor;
};

export type AppFontFamilyTheme = {
  fontFamily: AppFontFamily;
};

export type AppFontWeightTheme = {
  fontWeight: AppFontWeight;
};

export type AppScreensTheme = {
  screens: AppScreens;
};

export type AppFontSizesTheme = {
  fontSizes: AppFontSizes;
};

export type AppComponentTheme = {
  component: AppComponent;
};

export type AppTheme = AppColorTheme &
  AppFontFamilyTheme &
  AppFontWeightTheme &
  AppSpacesTheme &
  AppScreensTheme &
  AppComponentTheme &
  AppFontSizesTheme;
