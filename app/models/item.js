// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: String,
  description: String,
  location: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  category: String,
  is_taken: Boolean,
  interested_users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  tags: [String],
  created_time: Date,
  updated_time: Date
});

mongoose.model('Item', ItemSchema);
