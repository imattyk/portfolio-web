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

function App() {
  return (
    <HttpsRedirect>
      <Theme>
        <Layout>
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
