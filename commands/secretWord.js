module.exports = {
    name: 'secretWord',
    description: "This will display if a member uses the secret word.",
    execute(message, secretWord){

        const Discord = require('discord.js');
        
        let embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setImage("https://media.giphy.com/media/NvXLlQvvXSmQM/giphy.gif")
            .setDescription("You used the SECRET WORD :confetti_ball: :tada: " + String(secretWord).toLocaleUpperCase() + "!!!!!!!");

        message.reply(embed);
        
    }
}