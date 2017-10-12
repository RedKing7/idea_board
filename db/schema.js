const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

const UserSchema = new Schema ({
   username: {
      type: String,
   },
   password: {
      type: String,
   },
   ideas: [IdeaSchema]
})

const UserModel = mongoose.model('User', UserSchema);
const IdeaModel = mongoose.model('Idea', IdeaSchema);

module.exports = {
   User: UserModel,
   Idea: IdeaModel
}