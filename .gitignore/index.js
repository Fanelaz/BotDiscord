const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = '+'


bot.on('ready', () => {
    console.log('Le bot ' + bot.user.tag + ' est bien connecter')

    bot.user.setStatus('dnd')

    bot.user.setActivity(`+help`, {type:  "STREAMING", url: "https://www.twitch.tv/nontoxic_27"})

});


bot.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "help"){
        var embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Voici les commande le prefix est [+]')
            .addField('Ping', 'renvoi Pong')
            .addField('Avatar', 'Donne ton avatar')
            .addField('Say embed', 'a coté tu met ta phrase et tu verra la surprise')
            .addField('Invitbot', "Pour m'inviter sur ton serv")
            .setTimestamp()
            .setColor("RANDOM")
            message.channel.send(embed);
    }
});

bot.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "avatar"){
        var embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL(), 'https://discord.js.org')
            .setTitle("voici l'avatar de")
            .setDescription(message.author.username)
            .setColor("RANDOM")
            .setThumbnail(message.author.displayAvatarURL())
            .setImage(message.author.displayAvatarURL())
            .setFooter('Bonne journée', message.author.displayAvatarURL());
            message.channel.send(embed);
    }
});


bot.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "ping"){
        var embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL(), 'https://discord.js.org')
            .setTitle("PONG !")
            .setColor("RANDOM")
            .setImage(message.author.displayAvatarURL())
            .setFooter('Bonne journée', message.author.displayAvatarURL());
            message.channel.send(embed);
    }
});

bot.on("message", async message => {

    const prefix = "+";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase(); 

   if (cmd === "say"){
        if (message.deletable) message.delete();

        if (args.length < 1)
            return message.reply("Veuillez faire une phrase à côté de .say ou .say embed").then(m => m.delete(5000));


        if (args[0].toLowerCase() === "embed") {
            var embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL)
                .setFooter(bot.user.username, bot.user.displayAvatarURL)

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
});

bot.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "invitbot"){
        var embed = new Discord.MessageEmbed()
            .setTitle('Tu veut inviter mon bot')
            .setDescription('Clique sur le lien en bleu')
            .setURL('https://discordapp.com/oauth2/authorize?client_id=688381377829535764&scope=bot&permissions=8')
            .setTimestamp()
            .setColor("RANDOM")
            message.channel.send(embed);
    }
});



bot.login('Njg4MzgxMzc3ODI5NTM1NzY0.Xnsreg.mPuKjY0S1UPiBDAdRLOSftSJhAE') 
