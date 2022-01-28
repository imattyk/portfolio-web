import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "carbon-components-react";

import {
  LogoInstagram32,
  LogoLinkedin32,
  LogoYoutube32,
} from "@carbon/icons-react";

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header
        aria-label="Portfolio webpage"
        onClick={isSideNavExpanded === true ? onClickSideNavExpand : null}
      >
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Otvoriť menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="Portfolio">
          Matej Komlosi
        </HeaderName>
        <HeaderNavigation aria-label="Navigácia">
          <HeaderMenuItem element={Link} to="/gallery">
            Galéria
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/contact">
            Kontakt
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/gallery">
                Galéria
              </HeaderMenuItem>
            </HeaderSideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/contact">
                Kontakt
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Instagram">
            <LogoInstagram32 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Linked in">
            <LogoLinkedin32 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Youtube">
            <LogoYoutube32 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
