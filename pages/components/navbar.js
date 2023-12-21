import Link from 'next/link';
//import js cookie
import Cookies from 'js-cookie';

function Navbar() {
  //get token
  const token = Cookies.get('token');
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark fixed-top border-0 shadow-sm">
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">LARAVEL JWT & NEXT.JS</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {/* <li className="nav-item"><Link href="https://santrikoding.com/artikel" passHref><a className="nav-link">POSTS</a></Link></li> */}
              <li className="nav-item"><Link href="https://santrikoding.com" legacyBehavior><a className="nav-link">TRAVEL</a></Link></li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <Link href="/register" legacyBehavior>
                  <a className="nav-link btn btn-primary btn-sm text-white shadow border-0 me-3">REGISTER</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login" legacyBehavior> 
                  <a className="nav-link btn btn-success btn-sm text-white shadow border-0">LOGIN</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
