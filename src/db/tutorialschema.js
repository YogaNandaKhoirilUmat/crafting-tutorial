const mongoose = require('mongoose');
// Skema Material
const materialSchema = new mongoose.Schema({
  material: {
    type: String,
    required: true
  },
  tutorials: [
    {
        link: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
  ]
  
});

 
const materialModel = mongoose.model('tutorialschema', materialSchema);

module.exports = materialModel;

