console.log("##### Starting Demo #####");
import Kurs from './models/kurs.js';
import Hochschule from './models/hochschule.js';
import Professor from './models/professor.js';
import Student from './models/student.js';
import MongoDB from "mongodb";

//Models erzeugen
var fh_muenster = new Hochschule("FA Münster");
var studenten = [
    new Student("tim", 22, fh_muenster, "1234"),
    new Student("simon", 21, fh_muenster, "1235"),
    new Student("kevin", 23, fh_muenster, "1236"),
    new Student("pascal", 22, fh_muenster, "1237")
];
var professor = new Professor("Humernbrum", 30, fh_muenster);
var kurs = new Kurs(
    "BigData",
    studenten,
    professor,
    fh_muenster,
);



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
            db.collection("person").drop(); //delete old
            var personCollection = db.collection("person"); //create new by accesing non existing
            await personCollection.insertMany([studenten, professor]);
            var documents = await personCollection.find({}).toArray();
            console.log(documents);
        }
});