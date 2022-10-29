import MongoDB from "mongodb";

const userName = 'user';
const password = 'mypass';
const databaseName = 'mydatabase';
const url = 'mongodb://localhost:27017';
const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    auth: { 
        username: userName, 
        password: password 
    }, 
    authSource: databaseName
};
let personCollection = null;
let hochschuleCollection = null;
let studentCollection = null;
let professorCollection = null;
let courseCollection = null;

MongoDB.MongoClient.connect(url, options, async (err, client) => {
    if (err) {
        console.log('Could not connect to MongoDB: ', err.stack);
        process.exit(1);
    } else {
        var db = client.db(databaseName);
        personCollection = db.collection('person');
        //hochschuleCollection = db.collection('hochschule');
    }
});
export {
    personCollection
};