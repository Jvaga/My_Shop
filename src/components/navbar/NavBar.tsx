import { DesktopNavbar } from "./NavBar.css";
import { NavbarMobile } from "./navbarMobil/NavBarMobil";
import { NavbarDesktop } from "./navbarDesktop/NavbarDesktop";
export const NavBar = () => {
  return (
    <>
      <DesktopNavbar>
        <NavbarDesktop />
      </DesktopNavbar>
      <NavbarMobile />
    </>
  );
};
