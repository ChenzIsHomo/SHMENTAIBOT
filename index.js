const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
client.commands = new discord.Collection(); //bro i dont know
const { prefix, token, blacklisted } = require("./config.json"); //Token and other configs
const nekoclient = require('nekos.life');
const neko = new nekoclient();

client.commands = new discord.Collection();
client.events = new discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord);
})

client.on('ready', () => {
    console.log('Bot Online');

    client.user.setActivity("for " + prefix + "help" ,{
        type: "WATCHING"
    });
});

client.on("message", message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
  
	const args = message.content.slice(prefix.length).split(/ +/);
  
	const command = args.shift().toLowerCase();
  
	if (!client.commands.has(command)) return;
	  client.commands.get(command).execute(client, message, args);
})

client.login(SUSSYSTARTUP)
