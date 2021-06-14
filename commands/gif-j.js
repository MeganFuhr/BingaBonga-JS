const Jgifs = require('../models/jgifs')
const Discord = require('discord.js');

module.exports = {
    name: 'gif-j',
    description: "This returns a random gif of J.",
    execute(message){

        // Getting estimated document count.
        Jgifs.estimatedDocumentCount().then((count) => {
            //Random number between 0 and count.
            const rand = Math.floor(Math.random() * count);
 
            // Finding ONE random document.
            Jgifs
                .findOne()
                .skip(rand)
                .then((randomDocument) => {
                    embed = new Discord.MessageEmbed()
                    .setImage(randomDocument.jgifs)
                    message.channel.send(embed)})          
            });
    }
}