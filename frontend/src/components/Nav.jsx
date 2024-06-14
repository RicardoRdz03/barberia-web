import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import "../estilos.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <Navbar
        className="bg-transparent backdrop-blur-md shadow-none"
        id="navi"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />

          <NavbarBrand>
            <Image width={40} alt="NextUI hero Image" src="/logo1.png" />
            <p className="font-bold hidden md:block text-white ml-2 text-xl">
              BARBERSHOP
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link id="links" className="text-white" color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              id="links"
              className="text-white"
              href="#"
              aria-current="page"
            >
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link id="links" className="text-white" color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link className="text-white" href="#">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              className="text-white"
              as={Link}
              color="primary"
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="flex justify-center bg-transparent">
          <NavbarMenuItem className="text-center mb-7 text-white">
            HOLA
          </NavbarMenuItem>
          <NavbarMenuItem className="text-center mb-7 text-white">
            HOLA
          </NavbarMenuItem>
          <NavbarMenuItem className="text-center text-white">
            HOLA
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default Nav;
