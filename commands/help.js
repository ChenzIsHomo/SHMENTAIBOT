const configg = require("../config2.json");
const discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'Sends help.',
    execute(client, message, args) {
		if(args[0] == 'nsfw'){
			if (message.channel.nsfw === false) return message.channel.send('Please use this command in an nsfw channel.')
        	let embed = new discord.MessageEmbed() 
			.setTitle("Sussy ;)")
			.setDescription(`The prefix is: ${configg.prefix}`)
			.addFields(
				{ name: `${configg.prefix}anal`, value: `\u200B`},
				{ name: `${configg.prefix}blowjob`, value: `\u200B`},
				{ name: `${configg.prefix}boobs`, value: `\u200B`},
				{ name: `${configg.prefix}cumart`, value: `\u200B`},
				{ name: `${configg.prefix}cumsluts`, value: `\u200B`},
				{ name: `${configg.prefix}feet`, value: `\u200B`},
				{ name: `${configg.prefix}feetgif`, value: `\u200B`},
				{ name: `${configg.prefix}femdom`, value: `\u200B`},
				{ name: `${configg.prefix}futanari`, value: `\u200B`},
				{ name: `${configg.prefix}gasm`, value: `\u200B`},
				{ name: `${configg.prefix}girlsolo`, value: `\u200B`},
				{ name: `${configg.prefix}girlsologif`, value: `\u200B`},
				{ name: `${configg.prefix}hentai`, value: `\u200B`},
				{ name: `${configg.prefix}hentaigif`, value: `\u200B`},
				{ name: `${configg.prefix}keta`, value: `\u200B`},
				{ name: `${configg.prefix}kuni`, value: `\u200B`},
				{ name: `${configg.prefix}lesbian`, value: `\u200B`},
				{ name: `${configg.prefix}nsfwneko`, value: `\u200B`},
				{ name: `${configg.prefix}nsfwnekogif`, value: `\u200B`},
				{ name: `${configg.prefix}nsfwavatar`, value: `\u200B`},
				{ name: `${configg.prefix}pussy`, value: `\u200B`},
				{ name: `${configg.prefix}pussyart`, value: `\u200B`},
				{ name: `${configg.prefix}pussywank`, value: `\u200B`},
				{ name: `${configg.prefix}tits`, value: `\u200B`},
				{ name: `${configg.prefix}trap`, value: `\u200B`},
				{ name: `${configg.prefix}yuri`, value: `\u200B`},
			)
			.setColor("RANDOM")
			

			message.channel.send(embed)
		}
		if (args[0] === undefined){
			return;
			}
		}
	
    }
