import React from "react";
import {
  ProfileMenuContainer,
  ProfileMenuLink,
  ProfileMenuButton
} from "./navbarStyles";

const NavbarProfileMenu = ({ open }) => {
  return open ? (
    <ProfileMenuContainer>
      <ProfileMenuLink href="https://open.spotify.com" target="_blank">
        Account
      </ProfileMenuLink>
      <ProfileMenuLink href="https://www.spotify.com/mx/premium/" target="_blank">
        Switch to Premium
      </ProfileMenuLink>
    </ProfileMenuContainer>
  ) : null;
};

export default NavbarProfileMenu;
