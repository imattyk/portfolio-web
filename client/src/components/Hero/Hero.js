import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section id="hero" row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Vitaj na mojom <br /> Video Portfóliu.
      </SectionTitle>
      <SectionText className="intro-text">
        Matej Komlóši meno moje a vo voľnom čase rád točím videá. Pozri dole
        moju tvorbu a ak máš záujem zbúchať niečo spolu tak kľudne napíš.
      </SectionText>
      {/* <Button onClick={() => (window.location = "https://google.com")}>
        Kontakt
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
