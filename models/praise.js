const mongoose = require('mongoose');

const praiseSchema = new mongoose.Schema({
  praise: {
    type: String,
    required: true
  }
});
//below 'insult' = collection name to create.  MongoDB adds an 's' if one is excluded so insult becomes collection called insults.
//Insult Scheme defines the "table"
// i.e. name : Megan (string)
//      age : 101 (int)
//      gender : female (string)
const praise = mongoose.model('praise', praiseSchema);

module.exports = praise;