const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
   name: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
})

const IdeaSchema = new Schema ({
   title: {
      type: String,
      default: 'New Idea'
   },
   description: {
      type: String,
      default: 'Description Here'
   },
   created: {
      type: Date
   },
})

const UserModel = mongoose.model('User', UserSchema);
const IdeaModel = mongoose.model('Idea', IdeaSchema);

module.exports = {
   UserModel,
   IdeaModel
}