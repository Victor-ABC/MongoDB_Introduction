console.log("##### Starting Demo #####");
import Professor from './models/professor.js';
import Student from './models/student.js';
import Kurs from './models/kurs.js';
import MongoDB, { ObjectId } from "mongodb";

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
const professors_primary_key = new ObjectId();
var studenten = [
    new Student("Tim", 22, "1234"),
    new Student("Simon", 21, "1235"),
    new Student("Kevin", 23, "1236"),
    new Student("Pascal", 22, "1237")
];
var professor = new Professor("Humernbrum", 30);
professor["_id"] = professors_primary_key;
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

            //Übung 2: Tim wird 23
            await personCollection.updateOne(
                {
                    name: "Tim"
                },
                {
                    $set: {
                        age: 23
                    }
                }
            );
            //Übung 3
            var bool = true;
            if(bool) { //1. Variante:
                await kursCollection.updateOne({
                    name: "BigData"
                }, {
                    $set: {
                        gelesenVon: await personCollection.findOne({name: "Humernbrum"})
                    }
                })
                console.log( //Prof. abfragen, der den Kurs BigData liest.
                    (await kursCollection.findOne({name: "BigData"})).gelesenVon
                );
            } else { //2. Variante:
                await kursCollection.updateOne({
                    name: "BigData"
                }, {
                    $set: {
                        gelesenVon: professors_primary_key
                    }
                })
                console.log( //Prof. abfragen, der den Kurs BigData liest.
                    (await personCollection.findOne({
                        _id: (await kursCollection.findOne({name: "BigData"})).gelesenVon
                    }))
                );
            }
            console.log("### Print Kurs-Dokument ###")
            console.log( //print Kurs
                (await kursCollection.findOne({name: "BigData"}))
            );
            //### Todo-Ende ###

            //clear DB
            personCollection.deleteMany({});
            kursCollection.deleteMany({});
        }
});