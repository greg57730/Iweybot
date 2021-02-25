
const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const user = message.author;
  if(user.bot) return;

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#01FEDC")
    .setDescription(`**Action**:ouverture ticket\n**Raison**: ${message.content}\nUtilisateur: ${user}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  user.send("Nous avons recu votre ticket, on vous repondra dès que possible !")
  client.channels.cache.get('809511150471086101').send(embed);
 
}

