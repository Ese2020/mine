import React from "react";
import { HeroText } from "../../atoms/HeroText";
import { BottomBar, NavBar } from "../../molecules";

export const HomePage =() => {
  return (
    <div>
        <NavBar />

        <HeroText />

        <BottomBar />
    </div>
  );
}