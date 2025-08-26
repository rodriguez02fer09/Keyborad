export type Phonetic = {
  text: string
  audio: string
}

export type Meaning = any

export type FormatWord = {
  word: string
  phonetic: Phonetic
  meanings: Meaning
  source: string[]
}

export type State = {
  word: string
}

export type Action = {
  type: 'update_word'
  newWord: string
}
