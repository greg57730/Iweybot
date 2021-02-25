module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '806273353211445258');
  const jeuxconcoursdunetRole = message.guild.roles.cache.get("806270851057188865");
  const actujeuxvideoRole = message.guild.roles.cache.get("806271124266025012");
  const LespotesRole = message.guild.roles.cache.get("810255015833763890")
  if (member.user.bot) return;
  
  if(["doll", "gg", "grr", "happy"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "doll":
        member.roles.remove(jeuxconcoursdunetRole);
        break;

      case "gg":
        member.roles.remove(actujeuxvideoRole);
        break;

        case "grr":
        member.roles.remove(LespotesRole);
        break;

        case "happy":
        member.roles.remove(MembreRole);
        break;

    };
  };
}