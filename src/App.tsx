import React from "react";
import "./App.css";
import { NavigationMenu } from "radix-ui";
import "./style.css";

function App() {
  return (
    <div className="App">
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <div className="NavLogo"></div>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link href="/" className="nav-link">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link href="/" className="nav-link">
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link href="/" className="nav-link">
              Menu
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link href="/" className="nav-link">
              Reservations
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link href="/" className="nav-link">
              Order Online
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link href="/" className="nav-link">
              Login
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <p>Hello World</p>
    </div>
  );
}

export default App;
