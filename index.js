// require the discord.js module
const Discord = require('discord.js');
var request = require('request');
var randomNumber = require('random-number');
var randomPuppy = require('random-puppy');
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
    if( command === 'bestracer') {
        const taggedUser = message.guild.members.random();
        
        message.channel.send(taggedUser + ' is the best racer in the world!')
    }
    if(command === 'meme') {
        randomPuppy('carmemes').then(url => {
            var embed =  new Discord.RichEmbed().setImage(url);
            message.channel.send(embed);
        })
    }
    
});
// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);