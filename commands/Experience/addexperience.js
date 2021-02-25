
const { MESSAGES } = require("../../util/constants");


module.exports.run = (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToAdd = parseInt(args[1]);
  if (isNaN(expToAdd)) return message.reply("faut entrer un nombre...");
  client.addExp(client,user,expToAdd);
  message.channel.send(`Vous avez ajouter avec succès ${expToAdd} points d'XP à l'utilisateur ${user}!`);
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.ADDEXPERIENCE;