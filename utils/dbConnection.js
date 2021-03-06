const MongoClient = require("mongodb").MongoClient;
var db;
module.exports = {
  connectToDb: function (callback) {
    MongoClient.connect(
      process.env.MDB_URL,
      { useUnifiedTopology: true, useNewUrlParser: true },
      function (err, client) {
        db = client.db("db1");
        return callback(err);
      }
    );
  },

  getDb: function () {
    return db;
  },
};
