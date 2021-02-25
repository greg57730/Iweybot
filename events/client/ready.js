const { Client } = require("discord.js");


module.exports = client => {
  console.log(`${client.user.tag} observe les ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs du serveur!`);
  client.channels.cache.get('809511150471086101').send("Le bot est opérationnel!");

  let activities = [`?help`, `avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, ` joue à pierre,feuille,papier,ciseaux avec Iwey_TV`, `sur ${client.guilds.cache.size.toString()} serveur`], i = 0 ;

  setInterval(() => client.user.setPresence({ activity: { name: `${activities [i++ % activities.length]}` , type: `WATCHING`}, status: `online`}), 3000);


}
