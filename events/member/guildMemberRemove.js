const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {

  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#FFA500")
    .setFooter("Un utilsateur a quitté")
    .setTimestamp();

  client.channels.cache.get('809511150471086101').send(embed);

}
