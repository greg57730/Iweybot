const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");


module.exports.run = (client, message, args) => {
  const replies = ["Oui", "Non", "Peut-être"];
  const question = args.join(" ");
  const reponse = Math.floor(Math.random() * replies.length);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#cb4e41")
    .setThumbnail("https://e7.pngegg.com/pngimages/675/543/png-clipart-magic-8-ball-eight-ball-billiards-billiard-balls-ball-sphere-sports.png")
    .addField(question, replies[reponse]);

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.EIGHTBALL;