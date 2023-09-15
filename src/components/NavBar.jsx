import "./NavBar.scss"
import { images } from '../constants'

const NavBar = () => {
  return (
    // Class naming is using BEM methodology
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
            {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                // The '#' in the link is to enable the page jump to that section when clicked
                <li key={index} className="app__flex p-text">
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
export default NavBar