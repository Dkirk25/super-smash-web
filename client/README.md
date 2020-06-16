# Super Smash App

This project contains both a client and server project in this repository. The client is a _React_ application located in `/client` and is generated from Facebook's _Create React App_. The `/server` directory houses the custom Express backend that will serve this application. The production build will contain the express server with the built react app bundled.

In reality, the server is not bundling anything, since it is plain js it can run as is. you would bundle your code usually for a feature that doesn't exist natively in the runtime/language (example: using import vs require), or for performance like minification, removing comments, etc.

## Clean Setup

1. Clone repo `git clone ...`
2. Install server dependencies `cd path/to/project/server npm i`
3. Install client dependencies `cd path/to/project/client npm i`

## Development

Even though in production the Express app will server the "built" version of the react app. In development you will want to use the react development mode in _Create React App_. You will need two terminals (one for client, one for server). The Express app is set to run on 3001 by default, and the client app will run in a dev mode on 3000. We have told the client development mode to proxy its HTTP calls through the express app _(see client/package.json#4)_.

- open terminal into `project/server` and `npm dev`
- open terminal into `project/client` and `npm start`

## Environment Variables

in the `client` directory you are able to include `.env` files to load various variables into your React app based on your environment

- `.env.development` is used when running the development environment with `npm start`
- `.env.production` is used when compiling the code with `npm run build`

You can find more about the client-side `.env` setup by reading their documentation.

## Building for Production

1. cd to the root of the project
2. `npm run build:prod`
