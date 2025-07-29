import {NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
             <div className="inner-row">
                       <div className="header-content">
                                <nav>
                                        <Link to={'/'} className='logo'>
                                            <h1>Westrapay</h1>
                                        </Link>
                                          <ul>
                                                  <li><NavLink to={"/"}>Home</NavLink></li>
                                                  <li><NavLink to={"/company"}>Company</NavLink></li>
                                                  <li><NavLink to={"/solutions"}>Solutions</NavLink></li>
                                                  <li><NavLink to={"/resources"}>Resources</NavLink></li>
                                                  <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                          </ul>
                                </nav>
                                <div className="header-btns">
                                         <Link to={"/"} className='start'>Get Started</Link>
                                         <Link to={"/"} className='sales'>Contact Sales</Link>
                                </div>
                       </div>
             </div>
    </header>
  )
}

export default Header