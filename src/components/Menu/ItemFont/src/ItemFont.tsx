import {useContext} from 'react'
import '../index.scss'
import List from '../../../../assets/list-mode-fonts.svg'
import {AppContext} from '../../../../context/AppContext'

interface ItemFontProps {
  value: string
  handlerOnClick: () => void
}

const ItemFont = ({value, handlerOnClick}: ItemFontProps) => {
  const {theme, handleFontStyleChange} = useContext(AppContext)

  const defaultClass = 'main-itemFont'

  return (
    <div
      className={`${defaultClass} ${defaultClass}--${theme}`}
      onClick={handlerOnClick}
    >
      <div
        className={`${defaultClass}__container-input ${defaultClass}__container-input--${theme}`}
      >
        <input
          className={`${defaultClass}__container-input__input  ${defaultClass}__container-input__input--${theme} `}
          type="text"
          placeholder="Serif"
          value={value}
          onChange={e => handleFontStyleChange(e.target.value)}
          style={{fontFamily: value}}
          //   {isEmpty && ( la casilla desocupada
          //     <div className={`${defaultClass}__error ${custonClass}__error `}>
          //       No results
          //     </div>
          // )}
        />
      </div>
      <div
        className={`${defaultClass}__container-imagen ${defaultClass}__container-imagen--${theme}`}
      >
        <img
          className={`${defaultClass}__container-imagen__img  ${defaultClass}__container-imagen__img--${theme}`}
          src={List}
          alt=""
        />
      </div>
    </div>
  )
}
export default ItemFont
