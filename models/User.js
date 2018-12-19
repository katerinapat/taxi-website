const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  admin: { type: Boolean, default: false },
  firstName: String,
  lastName: String,
  email: String,
  encryptedPassword: String,
  resetPasswordToken: String,
  resetPasswordSentAt: String,
  phone: Number,
  countryCode: Number,
  confirmationToken: String,
  confirmedAt: { type: Date },
  confirmationSentAt: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
  lastSignInAt: { type: Date },
});

module.exports = mongoose.model('User', UserSchema);