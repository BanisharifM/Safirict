import ContactParallax from "components/Global/ContactParallax";
import Features from "components/MainPage/Features";
import MainParallax from "components/MainPage/MainParallax";
import News from "components/MainPage/News";
import OurProjects from "components/MainPage/OurProjects";
import SupportAndMaintain from "components/MainPage/SupportAndMaintain";
import Voip from "components/MainPage/Voip";
import WebDevelopment from "components/MainPage/WebDevelopment";
import Welcome from "components/MainPage/Welcome";

export default function Main() {
  return (
    <>
      <div>
        <Welcome />
        <Features />
        <SupportAndMaintain />
        <Voip />
        <WebDevelopment />
        <MainParallax />
        <OurProjects />
        <ContactParallax />
        <News />
      </div>
    </>
  );
}
