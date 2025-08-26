// types/context.ts
export type ThemeType = 'dark' | 'light'
export type FontStyleType = 'Sans Serif' | string

export interface AppContextType {
  theme: ThemeType
  fontStyle: FontStyleType
  toggleTheme: () => void
  isDark: () => boolean
  handleFontStyleChange: (font: FontStyleType) => void
}
