const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'feetgif',
    execute(client, message, args){
        if (!message.guild) return;
        if (message.channel.nsfw === false) return message.channel.send('wee wee woo woo this aint a poo poo channel')
            async function feetgif() {
            const GIF = await neko.nsfw.feetGif();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random feet gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            feetgif();
    }
}