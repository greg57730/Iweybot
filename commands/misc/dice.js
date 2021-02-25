const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const randomDice = () => Math.floor(Math.random() * 6) + 1;


module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("#cb4e41")
    .setTitle(`Lancement de dés`)
    .setThumbnail("https://assets.stickpng.com/images/580b585b2edbce24c47b246f.png")
    .addFields(
      {name: "Dés #1", value: randomDice(), inline: true},
      {name: "Dés #2", value: randomDice(), inline: true},
      {name: "Dés #3", value: randomDice(), inline: true},
      {name: "Dés #4", value: randomDice(), inline: true},
      {name: "Dés #5", value: randomDice(), inline: true},
    );
    embed.addField("Total", embed.fields.reduce((total, obj) => parseInt(obj.value) + total, 0), true)  
    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.DICE;