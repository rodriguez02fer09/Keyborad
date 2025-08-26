import type {FormatWord, Phonetic} from './types'

export const buildPhonetics = (phonetics: Phonetic[]): Phonetic => {
  return {
    text: phonetics.find(p => p.text !== '')?.text || '',
    audio: phonetics.find(p => p.audio !== '')?.audio || '',
  }
}

export const formatWord = (meaningWord: any): FormatWord => {
  if (meaningWord?.word) {
    const {word = '', phonetics, meanings, sourceUrls} = meaningWord
    return {
      word,
      phonetic: buildPhonetics(phonetics),
      meanings,
      source: sourceUrls,
    }
  }

  return {
    word: '',
    phonetic: {text: '', audio: ''},
    meanings: [],
    source: [],
  }
}

export const getWordDefinition = async (word: string) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    )
    const data = await response.json()
    return {
      ...data,
      status: response.status,
    }
  } catch (err) {
    console.error(err)
    return {status: 500}
  }
}
