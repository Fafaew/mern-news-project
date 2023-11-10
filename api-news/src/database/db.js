import mongoose from 'mongoose';

const connectDataBase = () => {
 console.log("Waiting connection to the database");
  mongoose.connect(
    "mongodb+srv://rafaelgomest:rafaelgomest@cluster0.whup8js.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(()=> console.log("MongoDBAtlas Connected"))
  .catch((error) => console.log(error));
};

export default connectDataBase;