import React, {useContext} from 'react'
import '../style/searchPrompt.scss'
import Shape from '../../../assets/shape.svg'
import {AppContext} from '../../../context/AppContext'

interface PropsSearchPrompt {
  empty: boolean
  notFound: boolean
  findWord: () => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchPrompt = ({
  handleInputChange,
  findWord,
  empty,
  notFound,
}: PropsSearchPrompt): JSX.Element => {
  const {theme, fontStyle} = useContext(AppContext)

  const defaultClass = 'search-prompt'

  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div
        className={`${defaultClass}__container-input ${defaultClass}__container-input--${theme}`}
      >
        <input
          className={`${defaultClass}__container-input__input ${defaultClass}__container-input__input--${theme} ${
            empty ? `${defaultClass}__container-input__input--red` : ''
          }`}
          type="text"
          placeholder="Search for any word…"
          style={{fontFamily: fontStyle}}
          onChange={handleInputChange}
          //Whoops, can’t be empty…
        />
        {empty && (
          <div className={`${defaultClass}__container-input__input--error`}>
            <p>Whoops, can’t be empty…</p>
          </div>
        )}
        {notFound && (
          <div className={`${defaultClass}__container-input__input--notFound`}>
            😕
            <p>No Definitions Found</p>
            <p>
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </div>
        )}
      </div>
      <div
        className={`${defaultClass}__container-img ${defaultClass}__container-img--${theme}`}
      >
        <img
          onClick={findWord}
          className={`${defaultClass}__container-img__img ${defaultClass}__container-img__img--${theme}`}
          src={Shape}
          alt="shape"
        />
      </div>
    </div>
  )
}
export default SearchPrompt
