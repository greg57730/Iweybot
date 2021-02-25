const { Client, Collection } = require('discord.js');
const config = require('./config');
const { loadCommands, loadEvents } = require("./util/loader");



const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach( x => client[x] = new Collection()); 

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login("process.env.TOKEN");
