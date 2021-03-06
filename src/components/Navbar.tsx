import { Flex, Link, Spacer } from "@chakra-ui/layout";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Navbar = () => {
  return (
    <Flex>
      <Link href="/" ml="5" pb="5" fontSize="3xl" fontFamily={"Itim"}>
        Ice-and-fire-explorer
      </Link>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
