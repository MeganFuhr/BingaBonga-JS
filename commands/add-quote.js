// quote Model
const Quote = require('../models/quote')

module.exports = {
    name: 'add-quote',
	description: 'Add an insult to the insult collection',
	async execute(message, args) {
		//insult : args is the path to the property name.  insult.insult[0] would be the actual insult.
		// insult references the scheme.  the schema (/models/insult) references the collection.
		await Quote.create({ quote: args })
			.then((result) =>  {
				message.channel.send(`Quote "${args}" added successfully.`)
			})
			.catch((err) => {
				message.channel.send(`FAILED. Error Message ${err}`)
			})
	},
}