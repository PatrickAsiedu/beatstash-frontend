import Container from "./Container";

const NavBar = () => {
  return (
    <nav className="hidden lg:block bg-black/1  text-sm mt-[63px] ">
      <Container>
        <div className="space-x-12 border-t-[0.5px] py-3  border-border-light  ">
          <a href="">Feed</a>
          <a href="">Tracks</a>
          <a href="">Dashboards</a>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
