// insult Model
const Insult = require('../models/insult')

module.exports = {
    name: 'add-insult',
	description: 'Add an insult to the insult collection',
	async execute(message, args) {
		//insult : args is the path to the property name.  insult.insult[0] would be the actual insult.
		// insult references the scheme.  the schema (/models/insult) references the collection.
		await Insult.create({ insult: args })
			.then((result) =>  {
				message.channel.send(`Insult "${args}" added successfully.`)
			})
			.catch((err) => {
				message.channel.send(`FAILED. Error Message ${err}`)
			})
	},
}