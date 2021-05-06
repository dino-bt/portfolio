import Link from "next/link";
// I import Link so that I can link it to all the routes.
const Header = () => {
  return (
    <header>
      <div className="menu">
        <div className="justify-content-center align-items-center">
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand">ABOUT</a>
              </Link>

              <Link href="/projects">
                <a className="navbar-brand">PROJECTS</a>
              </Link>

              <Link href="/contact">
                <a className="navbar-brand">CONTACT</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
