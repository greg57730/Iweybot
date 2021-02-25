const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");



module.exports.run = async (client, message) => {
const embed = new MessageEmbed()
    .setTitle("Top 10 des utilisateurs sur le serveur")
    .setColor("#16b84e")
    .setImage("https://media.giphy.com/media/XpZFtEuGwEnX60Vmb5/giphy.gif")
    .setDescription("(っ◔◡◔)っ ♥ Le leaderboard est très important dans un serveur! ♥ ")
    .setTimestamp()
    .setFooter("Experience");

  await client.getUsers(message.guild).then(p => {
    console.log(p);
    p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).forEach(e => {
      embed.addField(e.username, `${e.experience} pts d'XP`);
    });
  });

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.LEADERBOARD;