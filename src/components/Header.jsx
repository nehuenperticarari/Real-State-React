import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import img1 from '../assets/header.jpg'
import img2 from '../assets/headerImg.jpg'

const Header = () => {
  return (
    <header className='header'
    style={{ backgroundImage:`linear-gradient(to right, rgba(96, 54, 1, .8) 0%, rgba(96, 54, 1, .8)100%), url(${img1})` }}
    >
      
      <div className='header__bar container'>

        <Link className='header__logo' to={'/'}><img src={logo} width={100} height={60} alt="logo" /></Link>

        <nav className='navbar'>
          <Link className='navbar__link' to='/'>Home</Link>
          <Link className='navbar__link' to='/estate'>Find a home</Link>
          <Link className='navbar__link' to='/us'>About us</Link>
          <Link className='navbar__link' to='/contact'>Contact us</Link>
          <Link className='navbar__link' to='/blog'>Blog of the buyer</Link>
        </nav>

      </div>

      <div className='container'>
        <div className='header__content'>

          <h1 className='header__title'>Real State Buisness</h1>
          <p className='header__text'>Every day is taco ipsum tuesday. Say taco one more time. Give me tacos, or give me death. How do you feel about hard shelled tacos? How bout a gosh darn quesadilla?</p>
          <img className='header__img' src={img2} alt="" />

        </div>
      </div>
    </header>
  )
}

export default Header