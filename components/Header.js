import Link from "next/link";
// I import Link so that I can link it to all the routes.
const Header = () => {
  return (
    <div>
      <nav className="nav">
        <ul className = "nav-links">
          <li>
            <Link href="/">
              <a className="navbar-brand">ABOUT</a>
            </Link>
          </li>

          <li>
            
              <a href="#projects-section" className="navbar-brand">PROJECTS</a>
            
          </li>

          <li>
            
              <a href="#contact" className="navbar-brand">CONTACT</a>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
