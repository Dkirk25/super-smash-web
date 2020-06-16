import React from "react";
import { useLocation } from "react-router-dom";

import { Container, Column, Columns } from "../bulma";
import { Image } from "../bulma/elements/Image";

/**
 * Custom interface that we can use to define the "allowed" configuration data fo a route. Just like Java
 */
interface RouteConfig {
  header?: boolean;
}

/**
 * Use that interface to make a new Map of routes to configs
 */
const HeaderConfig: {[path: string]: RouteConfig} = {
  '/signup': {

  },
  '/signin': {

  },
  '/profile': {
    header: false
  }
}

/**
 * Finally something React-specific
 *
 * A custom React hook to get the configuration object. A hook is a function that adds utility to a react component
 *
 * in ANY react component you create, you can import this method and call it like we do below, and you'll get the config for your route you are on
 */
 function useLocationConfig(): RouteConfig {
   const location = useLocation();
   return HeaderConfig[location.pathname] || {};
 }


export interface HeaderProps {}


const Header: React.FC<HeaderProps> = (props) => {

  // Use the hook in the component to get the configuration of a route
  const config = useLocationConfig();

  // Look at the config, and see if we have a value (true or false) if not then it WILL show it by default (?? true)
  const showHeader = config.header ?? true;
  if (!showHeader) {
    return null;
  }
  return (
    <Container style={{ paddingTop: 16, paddingBottom: 16 }}>
      <Columns>
        <Column
          spanSize="one-third"
          spanOffset="one-third"
          style={{ textAlign: "center" }}
        >
          <Image size="1x1">
            <img src="./Smash.png" alt="Smash Logo" />
          </Image>
        </Column>
      </Columns>
    </Container>
  );
};

export default Header;
