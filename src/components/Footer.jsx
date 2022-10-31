import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container footer__grid">

        <div className="footer__box">
            <h3 className="footer__title">Navegation</h3>
            <nav className="footer__navbar">
              <Link className='footer__link' to='/'>Home</Link>
              <Link className='footer__link' to='/estate'>Find a home</Link>
              <Link className='footer__link' to='/us'>About us</Link>
              <Link className='footer__link' to='/contact'>Contact us</Link>
              <Link className='footer__link' to='/blog'>Blog of the buyer</Link>
            </nav>
        </div>

        <div className="footer__box">
            <h3 className="footer__title">About Us</h3>
            <p className="footer__text">Every day is taco ipsum tuesday. These tacos are lit 🔥. Give me all your tacos. Say taco one more time. BARBACOA!! Carne asada on corn tortillas. Black or pinto beans? Let’s do a beef and a chicken, and one with both.</p>
        </div>

        <div className="footer__box">
            <img src={logo} alt="logo"/>
        </div>

      </div>
      <p className="footer__copyright">All rights reserved - Nehuen Perticarari&#169;. {new Date().getFullYear()}</p>

    </footer>
  )
}

export default Footer