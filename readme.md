# Gpio Server

A simple express server to interact with GPIO.

## Prerequisites

* node.js > 12
* [1 wire interface enabled](https://www.raspberrypi-spy.co.uk/2018/02/enable-1-wire-interface-raspberry-pi/)

## Installation

Get the software, and install dependencies.

```
mkdir -p ~/Sites && cd ~/Sites
git clone https://github.com/etuchscherer/gpio-server.git
npm i
```

## Running

To run on non-pi environments. Note, the `onoff` lib will not loaded, and the default mode will not work on a Raspberry PI.

```
npm start
```

To enable the gpio, for control of the board, pass `OS_ENV=pi` on startup. Or use the following command.

```
npm run start:pi
```


## Testing

Uhh. This has been a major PITA. Due to using `onoff` for pin interaction, I cannot create meaningful
tests for objects or services, or start the server on OSX. ( My primary dev machine. ) I'm actively working
on a solution to this problem, wether that means mocking epoll and a fs, or switching to a different
lib, like `node-rpio`, I'm not sure yet. But it's on my mind.