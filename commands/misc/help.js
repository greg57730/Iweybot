const { MessageEmbed } = require ("discord.js");
const { readdirSync } = require("fs");
const { MESSAGES } = require("../../util/constants");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args, settings) => {

  if (!args.length) {
    const embed = new MessageEmbed()
    .setColor("#36393F")
    .addField("Liste des commande", `Une liste de toutes les sous-categories disponibles et leurs commandes\nPour plus d'informations sur une commande, tapez \`${settings.prefix}help <command_name>\``)

   for (const category of categoryList) {
     embed.addField(
        `${category}`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(`, `)}`
       );
     };

      return message.channel.send(embed);

  } else {

    const command = client.commands.get(args[0]) ||client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("cette commande n'existe pas!");

    const embed = new MessageEmbed()

    .setColor("#36393F")
    .setTitle(`\`${command.help.name}\``)
    .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs) `)
    .addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(`' `)}`, true);
    return message.channel.send(embed);
  }
};   
    
       
    
module.exports.help = MESSAGES.COMMANDS.MISC.HELP;