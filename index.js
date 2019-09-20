// require the discord.js module
const Discord = require('discord.js');
var request = require('request');
var randomNumber = require('random-number');
var options = {
  min:  0
, max:  100
, integer: true
};



// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    
});
client.on('message', message => {
	if (message.content === 'dadjoke') {
       const options = {
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Accept-Charset': 'utf-8'
            }
        };
        request(options, function (error, response, body) {
          message.channel.send(response.body);
        });
	}
});
// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);