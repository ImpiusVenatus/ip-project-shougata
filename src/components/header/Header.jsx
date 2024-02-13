import './header.css'
import logo from '../../assets/logo/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
          <div className='navbar'>
              <div className='nav__logo'>
                  <img src={logo}/>
              </div>
              <div className='nav__links'>
                  <div className='nav__link'><a href='/'>Home</a></div>
                  <div className='nav__link'><a href='/contact'>Contact</a></div>
                  <div className='nav__link'><a href='/'>About Us</a></div>
                  <div className='nav__link'><a href='/'>Services</a></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Header