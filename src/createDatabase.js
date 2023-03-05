const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const data = require("./data");

// DATABASE CONNECTION

const string = `mongodb+srv://warlockk:gabru123@cluster0.1yrferc.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

// REFRESHING DATA
async function refreshData() {
  try {
    await Subscriber.deleteMany({}, { wtimeout: 30000 });

    console.log("Deleted all subscribers");
    const newSubscribers = await Subscriber.insertMany(data);
    console.log(`Added ${newSubscribers.length} new subscribers`);
  } catch (err) {
    console.log("Error refreshing data", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from database");
  }
}

refreshData();
