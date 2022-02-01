import { HashLink } from "react-router-hash-link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container style={{ alignItems: "center" }}>
    <Div1>
      <HashLink to="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/images/logo_mk_white.png" width="40" height="25" />{" "}
          <Span>VideoPortfolio</Span>
        </a>
      </HashLink>
    </Div1>
    <Div2>
      <li>
        <HashLink to="#bio">
          <NavLink>Bio</NavLink>
        </HashLink>
      </li>
      <li>
        <HashLink to="#gear">
          <NavLink>Výbava</NavLink>
        </HashLink>
      </li>
      <li>
        <HashLink to="#projects">
          <NavLink>Projekty</NavLink>
        </HashLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.instagram.com/matt_kom/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/matej-komlosi/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/channel/UC9d5lEPkqzB381t2uoH3ffQ">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
