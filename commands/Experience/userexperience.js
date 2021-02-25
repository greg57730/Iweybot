const { MESSAGES } = require("../../util/constants");


module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(`${user} possède ${mentionnedUser.experience} points d'XP!`);
  } else {
    message.reply(`tu possèdes ${dbUser.experience} points d'XP!`);
  }
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;