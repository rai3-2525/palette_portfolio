import React, { useState } from 'react';
import StyledEngineProvider from '@mui/styled-engine/StyledEngineProvider';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  {name: "ホーム", href: "/home"},
  {name: "このサイトについて", href: "/about"},
  {name: "ご使用方法", href: "/howto"},
  {name: "管理人について", href: "/contact"},
]

const Layout = ({ children }) => {
  const [ sideOpened, setSideOpened ] = useState(false);
  
  return (
  <>
    <StyledEngineProvider injectFirst>
      <header className = {styles.header}>
        <AppBar className = {styles.appbar}>
          <Toolbar  className = {styles.toolbar}>
            <Link href='/home' className={styles.title}>
              Livly Palette
            </Link>
            <br></br>
              <MenuIcon
                style = {{ fontSize: 30}}
                className = {styles.menuopen}
                onClick = {() => setSideOpened(true)}
              />
              {/* SideMenu */}
              <Drawer
                anchor={"right"}
                open={sideOpened}
                onClose={() => setSideOpened(false)}
                >
                {navLinks.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <Link
                    className={styles.link}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </Drawer>
            </Toolbar>
        </AppBar>
      </header>

      {children}

      <footer className = {styles.footer}>
        <p>
          『Livly Island』『リヴリーアイランド』は、ココネ株式会社の商標です。<br></br>
          『Livly Island』に関わる著作権その他一切の知的財産権はココネ株式会社に属しており、このサイトは『Livly Island』及びココネとは、一切関係がありません。
        </p>
        <p>
          &copy; 2023 Livly Pallete All Rights Reserved.
        </p>
      </footer>

    </StyledEngineProvider>
  </>
  );
};

export default Layout;