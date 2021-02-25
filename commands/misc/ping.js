const { MESSAGES } = require("../../util/constants");


module.exports.run = async (client, message, args) => {
  const msg = await message.channel.send("Pong");
  msg.edit(
    `Test!
    <:happy:810266605501284433> Latence du bot: ${msg.createdTimestamp - message.createdTimestamp}ms
    <:happy:810266605501284433> Latence de l'API: ${Math.round(client.ws.ping)}ms`
  )
};

module.exports.help = MESSAGES.COMMANDS.MISC.PING;