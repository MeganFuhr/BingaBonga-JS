const Praise = require('../models/praise')

module.exports = {
    name: 'praise-j',
    description: "This will praise J.",
    execute(message, mentionString){

        // Getting estimated document count.
        Praise.estimatedDocumentCount().then((count) => {
            //Random number between 0 and count.
            const rand = Math.floor(Math.random() * count);
    
            // Finding ONE random document.
            Praise
                .findOne()
                .skip(rand)
                .then((randomDocument) => {
                message.channel.send(`${mentionString},${randomDocument.praise} :heartpulse:`)
            });
        });   
        
    }
}