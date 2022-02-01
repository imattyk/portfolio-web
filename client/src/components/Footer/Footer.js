import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Zavolaj</LinkTitle>
          <LinkItem href="tel:+421917579691">+421 917 579 691</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:matej.komlosi@gmail.com">
            matej.komlosi@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Teším sa na spoluprácu.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://www.instagram.com/matt_kom/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/matej-komlosi/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UC9d5lEPkqzB381t2uoH3ffQ">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
