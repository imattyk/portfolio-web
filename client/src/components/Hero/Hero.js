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
        Ahoj, volám sa Matej Komlóši a toto je moja cesta tvorbou videi. Nájdeš
        tu na jednom mieste všetky projekty na ktorých som sa podielal. Ak máš
        záujem o spoluprácu, neváhaj ma kontaktovať.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Kontakt
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
