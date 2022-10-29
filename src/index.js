console.log("##### Starting Demo #####");
import Kurs from './models/kurs.js';
import Hochschule from './models/hochschule.js';
import Professor from './models/professor.js';
import Student from './models/student.js';
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
//CollectionNames
const PERSON_COLLECTION_NAME = "PERSON";
const HOCHSCHULE_COLLECTION_NAME = "HOCHSCHULE";
const KURS_COLLECTION_NAME = "KURS";
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

MongoDB.MongoClient.connect(url, options, async (err, client) => {
    if (err) {
        console.log('Could not connect to MongoDB: ', err.stack);
        process.exit(1);
    } else {
            var db = client.db(databaseName);
            var personCollection = await db.collection(PERSON_COLLECTION_NAME); //creates collection by accessing a non existing one
            var hochschuleCollection = await db.collection(HOCHSCHULE_COLLECTION_NAME);
            var kursCollection = await db.collection(KURS_COLLECTION_NAME)
            //### Insert ###
            //Todo: Insert all Persons
            await personCollection.insertMany([...studenten, professor]);
            //Todo: Insert Hochschule
            await hochschuleCollection.insertOne(fh_muenster);
            //Todo: Insert Kurs
            await kursCollection.insertOne(kurs);
            //### Select ###
            var result_personen = await personCollection.find({}).toArray();
            console.log(result_personen);
            var resutl_hochschule = await hochschuleCollection.find({}).toArray();
            console.log(resutl_hochschule);
            var result_kurs = await kursCollection.find({}).toArray();
            console.log(result_kurs);
            //clear DB
            personCollection.deleteMany({});
            hochschuleCollection.deleteMany({});
            kursCollection.deleteMany({});
        }
});