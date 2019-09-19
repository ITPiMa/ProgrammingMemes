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
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
	else if (command === 'dadjoke') {
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
    else if (command === 'failornot') {
        if (!message.mentions.users.size) {
            return message.reply('Tag a user!');
        }
        else {
            const taggedUser = message.mentions.users.first();
            message.channel.send("${taggedUser}");
            message.channel.send("${taggedUser} will have "+randomNumber(options)+"% on the test HTML.");  
        }
	}
});
// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);