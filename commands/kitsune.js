const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'kitsune',
    execute(client, message, args){
        if (!message.guild) return;
        if (message.channel.nsfw === false) return message.channel.send('wee wee woo woo this aint a poo poo channel')
            async function kitsune() {
            const GIF = await neko.nsfw.kitsune();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random kitsune image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            kitsune();
    }
}