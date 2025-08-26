// src/types/global.ts

export interface Phonetic {
  text: string
  audio: string
}

export interface Definition {
  definition: string
  example: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
}

export interface FontOption {
  label: string
  font: string
}
