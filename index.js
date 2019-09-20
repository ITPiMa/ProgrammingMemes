// require the discord.js module
const Discord = require('discord.js');
var request = require('request');
var randomNumber = require('random-number');
var options = {
  min:  0
, max:  100
, integer: true
};
const config = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    
});
client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
	if (command === 'dadjoke') {
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
    if( command === 'failornot') {
        if (!message.mentions.users.size) {
            return message.reply('Tag a user dummy! Thats 0% for sure!');
        }
        const taggedUser = message.mentions.users.first();
        
        message.channel.send('${taggedUser} will have '+ randomNumber(options) +'% on his test HTML.')
    }
    
});
// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);