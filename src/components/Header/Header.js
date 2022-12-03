import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title, imageLight, imageDark } = header
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <header className='header center'>
      {themeName === 'dark' ? (
        <a href={homepage} className='link'>
          <img src={imageDark} width='100' height='100' alt='Stephen Martinez'/>
        </a>
      ):(
        <a href={homepage} className='link'>
          <img src={imageLight} width='100' height='100' alt='Stephen Martinez'/>
        </a>
      )}
      {/* <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3> */}
      <Navbar />
    </header>
  )
}

export default Header
