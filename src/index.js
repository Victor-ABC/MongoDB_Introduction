console.log("##### Starting Demo #####");
import Professor from './models/professor.js';
import Student from './models/student.js';
import Kurs from './models/kurs.js';
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
//Collection Namen
const PERSON_COLLECTION_NAME = "PERSON";
const KURS_COLLECTION_NAME = "KURS";
//Objekte erzeugen
var studenten = [
    new Student("tim", 22, "1234"),
    new Student("simon", 21, "1235"),
    new Student("kevin", 23, "1236"),
    new Student("pascal", 22, "1237")
];
var professor = new Professor("Humernbrum", 30);
var kurs = new Kurs("BigData");

MongoDB.MongoClient.connect(url, options, async (err, client) => {
    if (err) {
        console.log('Could not connect to MongoDB: ', err.stack);
        process.exit(1);
    } else {
            var db = client.db(databaseName);
            var personCollection = await db.collection(PERSON_COLLECTION_NAME); //creates collection by accessing a non existing one
            var kursCollection = await db.collection(KURS_COLLECTION_NAME)

            //### Todo: Hier ihre Lösung einfügen ###

            await personCollection.insertMany([...studenten, professor]);
            await kursCollection.insertOne(kurs);


            var result = await personCollection.find({}).toArray();
            console.log(result);

            //### Todo-Ende ###

            //clear DB
            personCollection.deleteMany({});
            kursCollection.deleteMany({});
        }
});