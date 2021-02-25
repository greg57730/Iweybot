const { MESSAGES } = require("../../util/constants");


module.exports.run = async (client, message, args) => {
  await message.delete();
  await client.channels.cache.get('809511150471086101').send("Le bot redémarre!");
  process.exit();
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;