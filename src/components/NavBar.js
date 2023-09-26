import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import meetLogo from "./images/meet-app-192.png";

function NavBar() {
  return (
    <Navbar>
      <img
        src={meetLogo}
        width="100"
        height="100"
        alt="Meet logo"
      />
    </Navbar>
  );
}

export default NavBar;