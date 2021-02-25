const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      CONFIG: {
        name: "config",
        aliases: [`config`],
        category: `admin`,
        description: 'Modifier la base de données',
        usage: '<key> <value>',
        isUserAdmin: false,  
        permissions: true,
        args: true
      },

      EVAL:{
        name: "eval",
        aliases: [`eval`],
        category: `admin`,
        description: 'Renvoi un code javascrip testé',
        usage: '<code_to_test>',
        isUserAdmin: false,  
        permissions: true,
        args: true
      },
      
      RELOAD:{
        name: "reload",
        aliases: [`reload`],
        category: `admin`,
        description: 'Relancer le bot',
        usage: '<code_to_test>',
        isUserAdmin: false,  
        permissions: true,
        args: false
      },
    },
    
    EXPERIENCE: {
        LEADERBOARD: {
        name: "leaderboard",
        aliases: [`classement`, `leadexp`],
        category: `experience`,
        description: "Classement d'expérience (top 10) des utilisateurs sur le serveur",
        cooldown: 10,
        usage: ``,
        isUserAdmin: false,
        permissions: false,
        args: false
        },

        ADDEXPERIENCE: {
        name: "addexperience",
        aliases: [`addexperience`, `addxp`],
        category: `experience`,
        description: "Ajouter de l'experience de l'utilisateur",
        cooldown: 10,
        usage: `<@user> <exp_to_add>`,
        isUserAdmin: false,
        permissions: true,
        args: true
        },

        REMOVEEXPERIENCE: {
        name: "removeexperience",
        aliases: [`remxp`, `remexp`],
        category: `experience`,
        description: "Supprimer de l'experience de l'utilisateur",
        cooldown: 10,
        usage: `<@user> <exp_to_remove>`,
        isUserAdmin: false,
        permissions: true,
        args: true  
          },

      USEREXPERIENCE: {
        name: "userexperience",
        aliases: [`userexperience`, `uexp`],
        category: `experience`,
        description: "renvoi l'experience de l'utilisateur",
        cooldown: 10,
        usage: ``,
        isUserAdmin: false,
        permissions: false,
        args: true
      },
    },
    MISC: {
      EIGHTBALL: {
        name: "8ball",
        aliases: ["8ball"],
        category: `misc`,
        description: "renvoi une réponse à une question",
        cooldown: 4,
        usage: `<question>`,
        permissions: false, 
        isUserAdmin: false,
        args: true
      },

      BOTINFO: {
        name: "botinfo",
        aliases: [`botinfo`],
        category: `misc`,
        description: "renvoi des infos concernant le bot",
        cooldown: 4,
        usage: ``,
        permissions: false, 
        isUserAdmin: false,
        args: false
      },
      DICE: {
        name: "dice",
        aliases: [`dice`],
        category: `misc`,
        description: "Renvoie la valeur de plusieurs dés",
        cooldown: 1,
        usage: ``,
        permissions: false, 
        isUserAdmin: false,
        args: false
      },
      HELP: {
        name: "help",
        aliases: [`help`],
        category: `misc`,
        description: "renvoi une liste de commandes ou les informations sur une seule! ",
        cooldown: 3,
        usage: `<command_name>`,
        permissions: false, 
        isUserAdmin: false,
        args: false
      },

      PING: {
        name: "ping",
        aliases: [`ping`],
        category: `misc`,
        description: "renvoi pong",
        cooldown: 10,
        usage: ``,
        permissions: false, 
        isUserAdmin: false,
        args: false
      },

      POLL: {
        name: "poll",
        aliases: ["poll", "sondage"],
        category: `misc`,
        description: "renvoi un sondage",
        cooldown: 10,
        usage: `<sondage>`,
        permissions: false, 
        isUserAdmin: false,
        args: true
      },

      SAY: {
        name: "say",
        aliases: [`repeat`, `rep`],
        category: `misc`,
        description: "repete le message d'un utilisateur",
        cooldown: 10,
        usage: `<votre message>`,
        permissions: false, 
        isUserAdmin: false,
        args: true
      },

      SERVERINFO: {
        name: "serverinfo",
        aliases: [`serverinfo`],
        category: `misc`,
        description: "renvoi des infos concernant le serveur",
        cooldown: 4,
        usage: ``,
        permissions: false, 
        isUserAdmin: false,
        args: false
      },
      USERINFO: {
        name: "userinfo",
        aliases: [`userinfo`],
        category: `misc`,
        description: "renvoi des infos concernant un utilisateur (ou vous même)",
        cooldown: 4,
        usage: `[<mentionned_user]`,
        permissions: false, 
        isUserAdmin: false,
        args: false
      },
    },

    MODERATION: {
      BAN: {
        name: "ban",
        aliases: [`ban`],
        category: `moderation`,
        description: 'ban un utilisateur',
        usage: '<@user> <raison>',
        isUserAdmin: true,  
        permissions: true,
        args: true
      },

      KICK: {
        name: "kick",
        aliases: [`kick`],
        category: `moderation`,
        description: 'kick un utilisateur',
        usage: '<@user> <raison>',
        isUserAdmin: true,  
        permissions: true,
        args: true
      },
      MUTE:{
        name: 'mute',
        aliases: [`mute`],
        category: `moderation`,
        description: 'Mute un utilisateur',
        usage: '<@user> <time>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },

      PRUNE: {
        name: "prune",
        aliases: [`prune`],
        category: `moderation`,
        Description: "Purge un nombre de message sur un utilisateur spécifié",
        cooldown: 10,
        usage: `<@user>`,
        isUserAdmin: true,
        permissions: false,
        args: true
      },

      PURGE: {
        name: "purge",
        aliases: [`purge`],
        category: `moderation`,
        Description: "Purge un nombre de message",
        cooldown: 4,
        usage: `<nbr_messages>`,
        isUserAdmin: false,
        permissions: true,
        args: true
      },
      UNMUTE: {
        name: 'unmute',
        aliases: [`unmute`],
        category: `moderation`,
        description: 'Mute un utilisateur',
        usage: '<@user>',
        isUserAdmin: false,
        permissions: true,
        args: true,
      },

    },

    REACTIONS:{
      ALLROLES:{
        name: "allroles",
        aliases: [`allroles`],
        category: `reactions`,
        description: "renvoi un message avec des réactions",
        cooldown: 10,
        usage: ``,
        permissions: true, 
        isUserAdmin: false,
        args: false
      },
    },
  }
}

exports.MESSAGES = MESSAGES;