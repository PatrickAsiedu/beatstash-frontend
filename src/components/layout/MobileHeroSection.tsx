import SearchInput from "../SearchInput";
import Container from "./Container";

const MobileHeroSection = () => {
  return (
    <section className="  h-96  pt-24 lg:hidden">
      <Container>
        <h1 className=" text-4xl w-[85%] md:w-[70%] md:text-6xl md:leading-[55px] font-bebas">
          #1 MARKETPLACE TO BUY & SELL BEATS
        </h1>
        <h2 className="mt-3 mb-4 md:mb-6">
          Discover over 5 million beats to write your next song to
        </h2>
        <SearchInput variation="main"></SearchInput>
      </Container>
    </section>
  );
};

export default MobileHeroSection;
