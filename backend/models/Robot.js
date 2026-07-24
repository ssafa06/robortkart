// Robot.js
const robotSchema = {
  title: String,
  brand: String,
  model: String,
  year: Number,
  type: String,
  payload: String,
  location: String,
  state: String,
  price: Number,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  applications: [String],
  images: [String],
  isVerified: Boolean
}