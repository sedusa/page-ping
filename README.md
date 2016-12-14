# page-ping
### Node.js webpage status checker

![Page-ping](http://res.cloudinary.com/drsedusa/image/upload/v1481638473/page-ping_tovov1.png)

#### *What is Page-ping?*
Page-ping is a simple implementation of some of the numerous website status checkers out there (e.g. [Uptime Robot](https://uptimerobot.com)).  

#### *How does it work?*
It works by pinging a specified website or websites and relaying the status of the website (i.e. online or offline) to the user on their mobile device.  

#### *Modules & Services used*
I settled on using [Pushbullet](http://pushbullet.com) for the mobile integration because of their [well documented API](https://docs.pushbullet.com) and also because I found a great [node.js module](https://github.com/alexwhitman/node-pushbullet-api) for using the PushBullet REST API created by Alex Whitman.


### Setting up PushBullet
- Go to the [Pushbullet website](http://pushbullet.com) and sign up with either Google or Facebook.

![main page](http://res.cloudinary.com/drsedusa/image/upload/v1481641289/1-gotowebsite_rcqljf.png)

- Next, set up Pushbullet

![Setup](http://res.cloudinary.com/drsedusa/image/upload/v1481642166/2-setup_uzwbgf.png)

- Generate your **Access Tokens** for the API usage

![Tokens](http://res.cloudinary.com/drsedusa/image/upload/v1481642617/3-tokens_lwayev.png)

- Download Pushbullet from either the [Apple Store](https://itunes.apple.com/us/app/pushbullet/id810352052?ls=1&mt=8) or the (Google Play Store)[https://play.google.com/store/apps/details?id=com.pushbullet.android]


### Project setup
- After downloading or cloning the project, `cd` into the project folder and  run `$> npm install`
- Replace the *Access Token* and *Device Identification number* with your generated ids
- Add websites that you want to be pinged
```javascript
...
var pusher = new PushBullet('X.XXXXXXXXXXXXXXXXXXXXXXXXXX'); // <--- Replace this
var iphone = "XXXXXXXXXXXXXXXXXXXX"; // <--- Replace this
var hosts = ['XXXXXXX.XXXXXX.XXX', 'XXXXXXXXXX.XXXXXXX.XXX']; // <--- Add websites to be pinged
...
```


### Running the app
- `$> node ping.js`

![console.log](http://res.cloudinary.com/drsedusa/image/upload/v1481644625/console_fzldor.png)

(*Note:* The device identification numbers have been blocked out)


- Status of pinged websites shown in Pushbullet on mobile device

![Pushbullet on iphone](http://res.cloudinary.com/drsedusa/image/upload/v1481646292/Slice_2_tafsma.png)
