# Gpio Server

A simple express server to interact with GPIO.

## Prerequisites

* node.js > 12 (Currently, I think there's a dep issue with v14).
* [1 wire interface enabled](https://www.raspberrypi-spy.co.uk/2018/02/enable-1-wire-interface-raspberry-pi/)

### Setting up the Pi

[To set up your PI for the cabinet, follow these steps.](pi-config.md)

## Running

There are 2 components, the API and the client. If you followed the above setup, they will both comeup at boot.

You can also run each independantly with live reload.

### Running independantly

#### The API

To run the API on a non-pi environment, use `npm start`. This defaults to using nodemon. Note, the `onoff` lib will not loaded, the server will run, but there will be no GPIO control. __If you do not have OS support for the GPIO, and you try to use it, the server will crash.__

```
cd ~/Sites/gpio-server/api
npm start
```

__To enable the gpio__, you have to pass `OS_ENV=pi` on startup. Use the following command for convience.

```
npm run start:pi
```

#### The Client

To run the client with nodemon ::

```
cd ~/Sites/gpio-server/client
npm run serve
```

To build to dist, and run via a lightweight http-server. (Assumes you have `http-server` installed globally. `npm i -g http-server`);

```
cd ~/Sites/gpio-server/client
npm run build
cd dist && http-server
```


## Testing

Uhh. This has been a major PITA. Due to using `onoff` for pin interaction, I cannot create meaningful
tests for objects or services, or start the server on OSX. ( My primary dev machine. ) I'm actively working
on a solution to this problem, wether that means mocking epoll and a fs, or switching to a different
lib, like `node-rpio`, I'm not sure yet. But it's on my mind.

## Debugging

To debug the client you can enable the [vue-devtools app](https://github.com/vuejs/vue-devtools/blob/dev/packages/shell-electron/README.md) on your local machine. Follow the steps for remote debugging.

This is the easiest thing to do.

You can also forward port 9222 on your PI, and attempt remote debugging over the chrome network inspector.