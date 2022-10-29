console.log("##### Starting Demo #####");
import Kurs from './models/kurs.js';
import Hochschule from './models/hochschule.js';
import Professor from './models/professor.js';
import Student from './models/student.js';
import startDB from './mongo_access/db.js';

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

startDB(
    async function (db) {
        var personCollection = db.collection("person");
        var hochschuleCollection = db.collection("hochschule");
        var kursCollection = db.collection("kurs");
        await insertPersonen(personCollection);
        //await selectPersonen(personCollection);
        //personCollection.drop();
    }
);

//Insert Data to DataBase
async function insertPersonen(personCollection) {
    //Save Studenten
    const result = await personCollection.insertMany()
    //Insert Professor
}
//Select Data from DataBase
async function selectPersonen(personCollection) {
    personCollection.find()
    .toArray((err, resultSet) => {
        if(!err) console.log(resultSet);
    });
}