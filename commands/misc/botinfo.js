const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

  const embed = new MessageEmbed()
    .setColor("#C016FF")
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .addFields(

    {name: `Memoire`, value: `${(process.memoryUsage().headUsed / 1024 / 1024).toFixed(2)}
    MB`, inline: true},
    {name: `Uptime`, value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true},
    {name: `\u200b`, value: `\u200b`, inline: true},
    {name: `Salons`, value: `${client.channels.cache.size.toString()}`, inline: true},
    {name: `Utilisateurs`, value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true},
    {name: `Version`, value: `discord.js v12.5.1`, inline: true},

  )

  message.channel.send(embed);
};  


module.exports.help = MESSAGES.COMMANDS.MISC.BOTINFO;