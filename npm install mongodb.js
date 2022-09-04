const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/posts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// connecting mongo db
client.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log('Successfully connected to mongodb')
})
module.exports = client;
