const { MessageEmbed } = require("discord.js");
const message = require("../message/message");

module.exports = async (client, member) => {
  const settings = await client.getGuild(member.guild);
  let msg = settings.welcomeMessage;

  if (msg.includes("{{user}}")) msg = msg.replace("{{user}}", member);

  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#FFA500")
    .setTitle("Attention! Nouvel arrivant dans le café!!\nNous sommes maintenant **16** personnes!!")
    .setImage("https://media.giphy.com/media/15TLJYQ2nIBaM/giphy.gif")
    .setTimestamp();
  client.channels.cache.get('805552597728886795').send(embed);

  
   await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag,
   });
   await client.createUser(newUser);
}



