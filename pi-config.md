# Pi Setup

## Create an image

To format a micro SD drive on OSX, insert the card into your machine, and then :

1. Open `disk utility`.
2. Ensure you can view all devices, then select the correct drive.
3. Select `erase`. Format should be `MS-DOS`.
4. Name your drive. ( I used `tupi` ).

[Download an image from here](https://www.raspberrypi.org/downloads/raspberry-pi-os/). Follow these steps to get the image on your newly formatted card.

1. From your terminal, type `diskutil list`, and find your micro sd card.
2. Unmount the disk with `diskutil unmountDisk <disk-name>`. ( `disk-name` is the `disk8` portion of `/dev/disk8`).
3. Navigate to where your image is stored. For example: `cd ~/Desktop/pi-images`.

### __Important: Do not fuck this part up!!!__

Copy the image.

```
# use rdisk to run this unbuffered. If you dont',
# you will be waiting a very long time.

sudo dd if=pi-os.img of=/dev/r<disk-name> bs=1m
```

Insert the micro SD into your PI, and power it up.

## Setting up your PI

Install required packages with `apt-get`.

```
apt-get update
apt-get install git curl chromium-browser --yes
```

Install node

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 12
nvm use 12
```

### Get the software

Install this software. This will create the server dir, clone software, insall dependencies, and then build the dist's for client and api.

```
sudo mkdir -p ~/Sites && cd ~/Sites
git clone https://github.com/etuchscherer/gpio-server.git
npm i http-server -g
cd gpio-server
npm i
./bin/install
```

### Setup systemd

This will ensure that your system starts the API's and server when booted up.

#### Create your api service

```
sudo systemctl edit --force api --full
```

Then paste in the following ::

```
[Unit]
Description=Gpio API
After=network.target

[Service]
ExecStart=/home/pi/Sites/gpio-server/api/bin/www
WorkingDirectory=/home/pi/Sites/gpio-server/api

[Install]
WantedBy=multi-user.target
```

#### Create the client service

```
sudo systemctl edit --force client --full
```

Then paste in the following ::

```
[Unit]
Description=The client front end
After=network.target

[Service]
ExecStart=/home/pi/Sites/gpio-server/client/bin/www
WorkingDirectory=/home/pi/Sites/gpio-server/client

[Install]
WantedBy=multi-user.target
```

#### Enable your new services

```
sudo systemctl enable api
sudo systemctl enable client
```

### Setup chromium so it won't look for updates

You don't want kiosk mode prompting users to update chrome, and breaking the UX. This will prevent it from checking for updates for 1 year after bootup.

```
sudo touch /etc/chromium-browser/customizations/01-disable-update-check;echo CHROMIUM_FLAGS=\"\$\{CHROMIUM_FLAGS\} --check-for-update-interval=31536000\" | sudo tee /etc/chromium-browser/customizations/01-disable-update-check
```

### Enable kiosk mode

Create the autostart file
```
sudo mkdir -p .config/lxsession/LXDE-pi/
sudo touch .config/lxsession/LXDE-pi/autostart
```

Add the following to autostart.
```
@xset s off
@xset -dpms
@xset s noblank

@sed -i 's/"exited_cleanly": false/"exited_cleanly": true/' -/.config/chromium-browser Default/Preferences
@chromium-browser --noerrdialogs --kiosk http://localhost:8080 --incognito --disable-translate
```

### Enable ssh and 1-wire interface

In the raspi-config, enable ssh and 1 wire interfaces. After setting both, reboot. You should come up in kiosk mode now, looking at the dash at http://localhost:8080