import { Link } from "react-router-dom";
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
} from "./HeaderStyles";

const Header = () => (
  <Container style={{ alignItems: "center" }}>
    <Div1>
      <Link to="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/images/logo_mk_white.png" width="40" height="25" />{" "}
          <span>Video portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link to="#project">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#gear">
          <NavLink>Gear</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#aboutme">
          <NavLink>AboutMe</NavLink>
        </Link>
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
