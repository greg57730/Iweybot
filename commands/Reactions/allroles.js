const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");



module.exports.run = (client, message, args) => {
  const jeuxconcoursdunetRole = message.guild.roles.cache.get("806270851057188865");
  const actujeuxvideoRole = message.guild.roles.cache.get("806271124266025012");
  const lespotesRole = message.guild.roles.cache.get("810255015833763890");
  const jeuxconcoursdunetEmoji = message.guild.emojis.cache.get("810132510188240917");
  const actujeuxvideoEmoji = message.guild.emojis.cache.get("810141290603872286");
  const lespotesEmoji = message.guild.emojis.cache.get("810172724408352798");

  
  

  
  const embed = new MessageEmbed()
  .setTitle("Rôles")
  .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
  .setColor("#01FE43")
  .addField(
    "Les rôles disponibles:",
    `
    ${jeuxconcoursdunetEmoji} - ${jeuxconcoursdunetRole.toString()}
    ${actujeuxvideoEmoji} - ${actujeuxvideoRole.toString()}
    ${lespotesEmoji} - ${lespotesRole.toString()}
    `
  );

  client.channels.cache.get(`806273353211445258`).send(embed).then(async msg => {
    await msg.react(jeuxconcoursdunetEmoji);
    await msg.react(actujeuxvideoEmoji);
    await msg.react(lespotesEmoji);

  }) 

};
module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;