# Gpio Server

A simple express server to interact with GPIO.

## Prerequisites

* node.js > 12 (Currently, I think there's a dep issue with v14).
* [1 wire interface enabled](https://www.raspberrypi-spy.co.uk/2018/02/enable-1-wire-interface-raspberry-pi/)

### Setting up the Pi

Format your drive on OSX :

1. Insert micro SD card, and open `disk utility`.
2. Ensure you can view all devices, then highlight the removeable drive.
3. Select the `erase`, then name your micro SD card. ( I used `tupi` ).

Build your image.

1. From your terminal, type `diskutil list`, and find your micro sd card.
2. Unmount the disk with `diskutil unmountDisk <disk-name>`. ( `disk-name` is the `disk8` portion of `/dev/disk8`).
3. Navigate to where your image is stored. For example: `cd ~/Desktop/pi-images`.
4. Copy the image. `sudo dd if=pi-os.img of=/dev/r<disk-name> bs=1m`. __Important: Do not fuck up `<disk-name>`!!!__

Start your PI.

1. Power it on, and complete any initial setup.
2. Open a terminal, and `apt-get update && apt-get install git curl chromium-browser --yes`
3. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
4. Reopen a terminal, and `nvm install 12`.
5. In the same terminal, type `nvm use 12`. Upon completion, `v12` should be set as default.
4. Enable 1-wire interface. ( GUI is easy ).
5. Reboot, and you should be ready to install this software.

## Installation

Get the software, and install dependencies.

```
mkdir -p ~/Sites && cd ~/Sites
git clone https://github.com/etuchscherer/gpio-server.git
npm i
```

## Running

There are 2 components, the API and the client. You can either run each independantly with live reload.

### Running independantly

#### The API

Running the API on a non-pi environment, use `npm start`. This defaults to nodemon, and live reload. __Note, the `onoff` lib will not loaded, the server will run, but there will be no GPIO control.__

```
npm start
```

__To enable the gpio__, you have to pass `OS_ENV=pi` on startup. Use the following command for convience.

```
npm run start:pi
```


## Testing

Uhh. This has been a major PITA. Due to using `onoff` for pin interaction, I cannot create meaningful
tests for objects or services, or start the server on OSX. ( My primary dev machine. ) I'm actively working
on a solution to this problem, wether that means mocking epoll and a fs, or switching to a different
lib, like `node-rpio`, I'm not sure yet. But it's on my mind.