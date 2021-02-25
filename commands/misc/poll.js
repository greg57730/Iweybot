const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#ad14da")
    .setDescription(args.join(" "))
    .addField("Répondre à la question ci-dessus d'une des réactions", 
    `
    🟦 - Pour (oui)
    🟥 - Neutre
    🟧 - Contre (non)
    ` )
    .setTimestamp()
    .setFooter("N'hésiter pas à envoyer un autre sondage")
    
    const poll = await message.channel.send(embed);
    await poll.react("🟦");
    await poll.react("🟥");
    await poll.react("🟧");
};

module.exports.help = MESSAGES.COMMANDS.MISC.POLL;