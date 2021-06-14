const Insult = require('../models/insult')

module.exports = {
    name: 'insult-j',
    description: "This is insulting J",
    execute(message, mentionString){

        // Getting estimated document count.
        Insult.estimatedDocumentCount().then((count) => {
            //Random number between 0 and count.
            const rand = Math.floor(Math.random() * count);
  
            // Finding ONE random document.
            Insult
                .findOne()
                .skip(rand)
                .then((randomDocument) => {
                message.channel.send(`${mentionString},${randomDocument.insult} :middle_finger:`)
            });
        });
    }
}