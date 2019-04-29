const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message',msg=>{
    if(msg.author.username===client.user.username){
        return;
    }
    if (msg.content.match(/[Gg]rigori/)!==null) {
        msg.react('🐺').catch(console.error);
    }
    else if(msg.content.match(/<@572235311351070720>/g)){        
        msg.reply("I am best werewolf hunter in all Barovia!").catch((error)=>{
            console.error(error);
        });
    }
    else if(msg.content.match(/🐺([\w]*)/)!==null){
        switch(msg.content.match(/🐺([\w]*)/)[1]){
            case "github":
                msg.channel.send("https://github.com/LordDeimos/Grigori-Bot").catch(console.error);
                break;
            default:
                msg.channel.send("That is beneath great werewolf hunter Grigori, who can definitely read that!").catch(console.error);
        }
    }
});

client.login(auth.token).catch(console.error);