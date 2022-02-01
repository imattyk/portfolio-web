import React from "react";
import "./App.scss";
import HttpsRedirect from "react-https-redirect";
import Theme from "./styles/theme";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Timeline from "./components/TimeLine/TimeLine";
import { Layout } from "./layout/Layout";
import { Section } from "./styles/GlobalComponents";
import Acomplishments from "./components/Acomplishments/Acomplishments";
import BgAnimation from "./components/BackgrooundAnimation/BackgroundAnimation";
import DoraVideo from "./components/Video/web_background_1.mp4";

function App() {
  return (
    <HttpsRedirect>
      <Theme>
        <Layout>
          <video
            playsinline
            autoPlay
            loop
            muted
            poster="images/placeholder_bg.png"
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, 0%)",
              zIndex: "-1",
            }}
          >
            <source src={DoraVideo} type="video/mp4"></source>
          </video>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          <Timeline />
          <Technologies />
          <Projects />
          <Acomplishments />
        </Layout>
      </Theme>
    </HttpsRedirect>
  );
}

export default App;
