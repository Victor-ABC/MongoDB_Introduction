import MongoDB from "mongodb";

export default function startDB(callback) {
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
    MongoDB.MongoClient.connect(url, options, async (err, client) => {
        if (err) {
            console.log('Could not connect to MongoDB: ', err.stack);
            process.exit(1);
        } else {
            var db = client.db(databaseName);
            await callback(db);
        }
    });
}