const { getRandomInt } = require("./getRandomInt");

module.exports = {
    name: 'sopranos',
    description: "this is for Sopranos",
    execute(message, args){
        var f = require('./getRandomInt');

        var sopranosQuote = ["Gabagool over here. :spaghetti: " 
        ];
        message.channel.send(sopranosQuote[0]);     
    }
}