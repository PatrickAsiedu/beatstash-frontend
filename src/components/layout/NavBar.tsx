import { Link } from "react-router-dom";
import Container from "./Container";

const NavBar = () => {
  return (
    <nav className="hidden lg:block bg-black/1  text-sm mt-[63px] bg-bodyvar2">
      <Container>
        <div className="space-x-12 py-3   ">
          <Link to="/feed">Feed</Link>
          <Link to="/beats">Beats</Link>
          <Link to="/soundkits">Sound Kits</Link>
          <Link to="/search">Search Beat</Link>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
