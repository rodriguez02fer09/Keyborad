import {useContext} from 'react'
import '../index.scss'
import {AppContext} from '../../../../context/AppContext'

const TitleMeaning = () => {
  const {fontStyle} = useContext(AppContext)

  return (
    <div className="titleMeaning">
      <p style={{fontFamily: fontStyle}}>Meaning</p>
    </div>
  )
}
export default TitleMeaning
