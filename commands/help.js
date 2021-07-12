const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "This return help about available options.",
    execute(message){

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('ZilloBot')
            .setAuthor('Megan Fuhr', 'https://avatars.githubusercontent.com/u/8890846?v=4', 'https://github.com/MeganFuhr/BingaBonga-JS')
            .setDescription('Available commands below')
            .setThumbnail('https://github.com/MeganFuhr/BingaGifs/blob/main/j5.png?raw=true')
            .addFields(
                { name: '!add-insult', value: 'Add an insult to the database. Anyone except J can add insults.' },
                { name: '!add-praise', value: 'Add a praise to the database.  Anyone can add a praise.' },
                { name: '!add-quote', value: 'Add a quote to the database.  Only J can add quotes.'},
                { name: '!gif-j', value: 'Display a random gif of J.'},
                { name: '!insult-j', value: 'Use to insult J.'},
                { name: '!praise-j', value: 'Use to praise J.'},
                { name: '!quote-j', value: 'Use to quote J.'},
                { name: '!sopranos', value: 'Display a quote from a favorite J show.'},
                { name: '!st', value: 'Display a random Swear Trek gif.'},
            )
            //.addField('Inline field title', 'Some value here', true)
            //.setImage('https://pic.png')
            //.setTimestamp()
            .setFooter('ZilloBot', 'https://github.com/MeganFuhr/BingaGifs/blob/main/j5.png?raw=true');

    message.channel.send(embed)       

    }
}