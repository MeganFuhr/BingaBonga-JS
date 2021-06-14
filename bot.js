console.log(require('dotenv').config())

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');

const db = process.env.MONGOURI
const PREFIX = '!';
const secretWord = [process.env.SECRET_WORD];
const j = process.env.DISCORD_ID
let mentionString = `<@!${j}>`;

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => 
    console.log('MongoDB connected...')
    )
.catch(err => 
    console.log(err))

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log("ZilloBot is ready.")
});

client.on('message', msg => {
    const args = msg.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(!msg.content.startsWith(PREFIX)) {
        if (msg.author.bot){
            return;
        }
        if (secretWord.some(word => msg.content.toLowerCase().includes(word))) { 
            client.commands.get('secretWord').execute(msg, secretWord);
        }

    }
    if (command === 'insult-j') { 
         client.commands.get('insult-j').execute(msg, mentionString)
    }
    if (command === 'quote-j') { 
        client.commands.get('quote-j').execute(msg, mentionString)
    }
    if (command === 'praise-j') { 
        client.commands.get('praise-j').execute(msg, mentionString)
    }
    if (command === 'st') { 
        client.commands.get('st').execute(msg, args)
    }
    if (command === 'sopranos') { 
        client.commands.get('sopranos').execute(msg, args)
    }
    if (command === 'add-insult' && msg.author != j) {
        insult = (msg.content.split("!add-insult").pop())
        client.commands.get('add-insult').execute(msg, insult.trim())
    }
    if (command === 'add-quote' && msg.author == j) {
        quote = (msg.content.split("!add-quote").pop());
        client.commands.get('add-quote').execute(msg, quote.trim())
    }
    if (command === 'add-praise' && msg.author != j) {
        praise = (msg.content.split("!add-praise").pop());
        client.commands.get('add-praise').execute(msg, praise.trim())
    }
    if (command === 'gif-j') {
        client.commands.get('gif-j').execute(msg)
    }
      
});

client.login(process.env.BOT_TOKEN)