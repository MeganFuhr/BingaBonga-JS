const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  }
});
//below 'insult' = collection name to create.  MongoDB adds an 's' if one is excluded so insult becomes collection called insults.
//Insult Scheme defines the "table"
// i.e. name : Megan (string)
//      age : 101 (int)
//      gender : female (string)
const quote = mongoose.model('quote', quoteSchema);

module.exports = quote;