const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first();
  const reason = args.splice(1).join(' ');
  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas!");

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: kick\n**Raison*: ${reason}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
  client.channels.cache.get('809511150471086101').send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;