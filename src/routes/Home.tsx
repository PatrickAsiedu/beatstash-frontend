import React from "react";
import Header from "../components/Header";

import MobileHeroSection from "../components/MobileHeroSection";
import DesktopHeroSection from "../components/DesktopHeroSection";
import NavBar from "../components/NavBar";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import TrackTile from "../components/TrackTile";
import MemberTile from "../components/MemberTile";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
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
