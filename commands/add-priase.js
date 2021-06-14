// Praise Model
const Praise = require('../models/praise')


module.exports = {
    name: 'add-praise',
	description: 'Add a praise to the praise collection',
	async execute(message, args) {
		//insult : args is the path to the property name.  insult.insult[0] would be the actual insult.
		// insult references the scheme.  the schema (/models/insult) references the collection.
		await Praise.create({ praise : args })
			.then((result) =>  {
				message.channel.send(`Praise "${args}" added successfully.`)
			})
			.catch((err) => {
				message.channel.send(`FAILED. Error Message ${err}`)
			})
	},
}