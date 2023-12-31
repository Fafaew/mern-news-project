import mongoose from 'mongoose';

const connectDataBase = () => {
 console.log("Waiting connection to the database");
  mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(()=> console.log("MongoDBAtlas Connected"))
  .catch((error) => console.log(error));
};

export default connectDataBase;