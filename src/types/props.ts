import type {Phonetic, Meaning, Definition, FontOption} from './global'

export interface PropsSearchPrompt {
  empty: boolean
  notFound: boolean
  findWord: () => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface ItemFontProps {
  fonts: FontOption[]
  handlerClick: (f: FontOption) => void
}
export interface MainTitleProps {
  title: string
  phonetic: Phonetic
  urlAudio: string
}
export interface TitleProps {
  title: string
  phonetic: Phonetic
}

export interface PropMainSource {
  source: string[]
}

export interface PropsSynonyms {
  values: string[]
}

export interface PropsMainInformation {
  meanings: Meaning[]
}

export interface PropsDefinitions {
  definitions: Definition[]
}
