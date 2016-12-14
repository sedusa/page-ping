
var ping = require('ping');
var PushBullet = require('pushbullet');
var CronJob = require('cron').CronJob;

// Pushbullet config variables
var pusher = new PushBullet('X.XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'); // Access Token

pusher.devices(function(error, response) {
    // response is the JSON response from the API
    console.log(response); // check device identification number
});

var iphone = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // device identification number
var noteTitle = "Blog status";
var hosts = ['XXXXXXXXX.XXXXXXXXX.XXX', 'XXXXXXXX.XXXXXXXX.XXX']; // websites to ping

var job = new CronJob({
  cronTime: '0 0,5,10,15,20,25,30,35,40,45,50,55 * * * 0-6',
  onTick: function() {
     /*
     * Runs every five minutes.
     * Every day of the week
     */
     hosts.forEach(function(host) {
       ping.sys.probe(host, function(isAlive) {
           if (isAlive === true) {
             var noteBodyAlive = "Your blog " + host + " is alive!";
             pusher.note(iphone, noteTitle, noteBodyAlive, function(error, response){
                 // response is the JSON response from the API
                 // console.log("Response from pusher.note", response);
             });
           }
           else {
             var noteBodyDead = "Your blog " + host + " is dead :-(";
             pusher.note(iphone, noteTitle, noteBodyDead, function(error, response){
                 // response is the JSON response from the API
                 // console.log("Response from pusher.note", response);
             });
           }

         })
     }); // hosts.forEach ends

  },
  start: false,
  timeZone: 'America/New_York'
});
job.start();
