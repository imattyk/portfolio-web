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
  AppSwitcher20,
  LogoInstagram32,
  LogoLinkedin32,
  LogoYoutube32,
  Notification20,
  UserAvatar20,
} from "@carbon/icons-react";

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Portfolio webpage">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="Portfolio">
          Matej Komlosi
        </HeaderName>
        <HeaderMenuItem element={Link} to="/gallery">
          Galéria
        </HeaderMenuItem>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
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
