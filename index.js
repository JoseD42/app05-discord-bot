import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyNDQ3ODIzMzgwNTEx.X3tJUg.1YJd--1K8wPDj56MDdW41F9ssU4';

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
});

client.on('message', message =>{
    if(message.content === 'anta'){
        message.reply('baka');
    }
});

client.login(TOKEN_API);