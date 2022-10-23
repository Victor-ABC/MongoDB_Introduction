import Person from './person.js';
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
MongoDB.MongoClient.connect(url, options, async (err, client) => {
    if (err) {
        console.log('Could not connect to MongoDB: ', err.stack);
        process.exit(1);
    } else {
        var db = client.db(databaseName);
        let collection = db.collection('employees');
        console.log("connected to MongoDB");
        //Übungen:
        await runInsertion(collection);
        await runSelection(collection);
    }
});
//Hier geben studierende ihren code ein, um Aufgabe zu lösen
async function runInsertion(collection) {
    let employee1 = new Person("tim", 18);
    let employee2 = new Person("kevin" , 19);
    await collection.insertOne(employee1, (err, result) => {
        if (!err) { console.log('Inserted Document'); }
    });
    await collection.insertOne(employee2, (err, result) => {
        if (!err) { console.log('Inserted Document'); }
    });
}
//Hier geben studierende ihren code ein, um Aufgabe zu lösen
function runSelection(collection) {
     collection.find({ age: 18 })
    .sort({ name: 1 })
    .limit(2)
    .toArray((err, resultSet) => {
    if (!err) { 
        console.log(resultSet);
    }
    });
}