import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Vitaj na mojom <br /> Video Portfóliu.
      </SectionTitle>
      <SectionText>
        Čau. Volám sa Matej Komlóši a rád točím videá. Pozri dole moju tvorbu a
        ak máš záujem spolupracovať kľudne napíš.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Kontakt
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
