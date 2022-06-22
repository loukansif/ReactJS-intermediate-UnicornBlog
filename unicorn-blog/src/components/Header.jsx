/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
    return (
      <div className="Header">
        {/* <a href="#" className="logoMatrice"> */}
          <img src="../../assets/img/matriceLogo.png" alt="Logo" />
        {/* </a> */}
        <nav>
          <ul>
            <li><a href="#">Upload</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Header;