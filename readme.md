# Gpio Server

A simple express server to interact with GPIO.

## Prerequisites

* node.js > 12
* epoll
* Linux, with GPIO

## Installation

Get the software, and install dependencies.

```
mkdir -p ~/Sites && cd ~/Sites
git clone https://github.com/etuchscherer/gpio-server.git
npm i
```

## Testing

Uhh. This has been a major PITA. Due to using `onoff` for pin interaction, I cannot create meaningful
tests for objects or services, or start the server on OSX. ( My primary dev machine. ) I'm actively working
on a solution to this problem, wether that means mocking epoll and a fs, or switching to a different
lib, like `node-rpio`, I'm not sure yet. But it's on my mind.