// types/context.ts
// export type ThemeType = 'dark' | 'light'
export type FontStyleType = 'Sans Serif' | string
// ✅ Forma recomendada: usar `as const` + `typeof`

// Definimos un objeto con los valores de tema.
// `as const` congela los valores para que sean literales exactos ("dark" | "light")
// en lugar de simples strings.
const ThemeTypeValues = {
  dark: 'dark',
  light: 'light',
} as const

// Con `typeof ThemeTypeValues` obtenemos el tipo del objeto.
// Con `keyof` obtenemos sus claves ("dark" | "light").
// Finalmente, accediendo con `[keyof typeof ThemeTypeValues]`
// obtenemos un union type de los valores: "dark" | "light".
type ThemeType = (typeof ThemeTypeValues)[keyof typeof ThemeTypeValues]

//setTheme(ThemeTypeValues.dark);  // ✅ seguro
// setTheme("light");               // ✅ válido
// setTheme("blue");              // ❌ Error: "blue" no existe en ThemeType

// 4. Escalable y fácil de mantener.
//    En proyectos grandes con muchos valores, este patrón evita errores
//    y mantiene sincronizados los valores en runtime y en los tipos.

export interface AppContextType {
  theme: ThemeType
  fontStyle: FontStyleType
  toggleTheme: () => void
  isDark: () => boolean
  handleFontStyleChange: (font: FontStyleType) => void
}
