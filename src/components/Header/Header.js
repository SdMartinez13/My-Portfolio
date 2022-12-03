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

      <a href={homepage} className='link'>
        <img src={themeName === 'dark' ? imageDark : imageLight} width='100' height='100' alt='Stephen Martinez' />
      </a>

      <Navbar />
    </header>
  )
}

export default Header
