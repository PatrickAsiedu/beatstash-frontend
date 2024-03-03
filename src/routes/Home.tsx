import React from "react";
import Header from "../components/layout/Header";

import MobileHeroSection from "../components/layout/MobileHeroSection";
import DesktopHeroSection from "../components/layout/DesktopHeroSection";
import NavBar from "../components/layout/NavBar";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import TrackTile from "../components/TrackTile";
import MemberTile from "../components/MemberTile";
import CTASection from "../components/layout/CTASection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      {/* <Header></Header>
      <NavBar></NavBar> */}
      <MobileHeroSection></MobileHeroSection>
      <DesktopHeroSection></DesktopHeroSection>
      <HorizontalScrollSection title="Trending Tracks">
        <TrackTile></TrackTile>
        <TrackTile></TrackTile>
        <TrackTile></TrackTile>
        <TrackTile></TrackTile>
        <TrackTile></TrackTile>
        <TrackTile></TrackTile>
        <TrackTile></TrackTile>
        <TrackTile></TrackTile>
      </HorizontalScrollSection>
      <HorizontalScrollSection title="Recommended Members">
        <MemberTile></MemberTile>
        <MemberTile></MemberTile>
        <MemberTile></MemberTile>
        <MemberTile></MemberTile>
        <MemberTile></MemberTile>
        <MemberTile></MemberTile>
        <MemberTile></MemberTile>
        <MemberTile></MemberTile>
      </HorizontalScrollSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  );
};

export default Home;
