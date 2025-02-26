// import React from 'react'

import { Outlet } from "react-router";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { SideMenu } from "../sideMenu/SideMenu";
import { useAppSelector } from "../../utilits";

export default function Wrapper() {
    const statusMenu = useAppSelector(state => state?.menu)
    const [showMenu, setShowMenu] = useState<JSX.Element | null>(null);

    useEffect(() => {
        if (statusMenu) {
          const timeoutId = setTimeout(() => {
            setShowMenu(<SideMenu />);
          }, 100);
          return () => clearTimeout(timeoutId);
        }
    
        else {
          const timeoutId = setTimeout(() => {
            setShowMenu(null);
          }, 100);
          return () => clearTimeout(timeoutId);
        }
      }, [statusMenu]);

  return (
    <>
        <Header />
        <Outlet /> 
        {showMenu}
        {/* Footer */}
    </>
    
  )
}
