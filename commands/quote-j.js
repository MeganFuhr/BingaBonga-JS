const Quote = require('../models/quote')

module.exports = {
    name: 'quote-j',
    description: "This is quoting J",
    execute(message, mentionString){

        // Getting estimated document count.
        Quote.estimatedDocumentCount().then((count) => {
            //Random number between 0 and count.
            const rand = Math.floor(Math.random() * count);
    
            // Finding ONE random document.
            Quote
                .findOne()
                .skip(rand)
                .then((randomDocument) => {
                message.channel.send(`"${randomDocument.quote}" -${mentionString}`)
            });
        });
    }
}
