
const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI || 'mongodb://doni:F3n0m3n4l@ds119755.mlab.com:19755/book-store'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})


// const db = process.env.MONGODB_URL;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     });
//     console.log("MongoDB is Connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };


