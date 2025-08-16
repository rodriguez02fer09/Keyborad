import React, {createContext, useState, type ReactNode, type FC} from 'react'

export type ThemeType = 'dark' | 'light'
export type FontStyleType = 'Sans Serif' | string

export interface AppContextType {
  theme: ThemeType
  fontStyle: FontStyleType
  toggleTheme: () => void
  isDark: () => boolean
  handleFontStyleChange: (font: FontStyleType) => void
}

const initialContext: AppContextType = {
  theme: 'light',
  fontStyle: 'Sans Serif',
  toggleTheme: () => {},
  isDark: () => false,
  handleFontStyleChange: () => {},
}

export const AppContext = createContext<AppContextType>(initialContext)

type ContextProviderProps = {
  children: ReactNode
}

export const ContextProvider: FC<ContextProviderProps> = ({children}) => {
  const [context, setContext] = useState<{
    theme: ThemeType
    fontStyle: FontStyleType
  }>({
    theme: 'light',
    fontStyle: 'Sans Serif',
  })

  const handleFontStyleChange = (font: FontStyleType) => {
    setContext(prev => ({...prev, fontStyle: font}))
  }

  const toggleTheme = () => {
    setContext(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }))
  }

  const isDark = () => context.theme === 'dark'

  return (
    <AppContext.Provider
      value={{
        isDark,
        toggleTheme,
        handleFontStyleChange,
        fontStyle: context.fontStyle,
        theme: context.theme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
