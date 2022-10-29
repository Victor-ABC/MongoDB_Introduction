import Course from './models/course.js';
import Hochschule from './models/hochschule.js';
import Professor from './models/professor.js';
import Student from './models/student.js';
console.log("##### Starting Demo #####");

var fh_muenster = new Hochschule("FA Münster");
var student1 = new Student("tim", 22, fh_muenster, "1234");
var student2 = new Student("simon", 21, fh_muenster, "1235");
var student3 = new Student("kevin", 23, fh_muenster, "1236");
var student4 = new Student("pascal", 22, fh_muenster, "1237");
var professor = new Professor("Humernbrum", 30, fh_muenster);
var course = new Course(
    "BigData", [
        student1,
        student2,
        student3,
        student4,
    ],
    professor
);

console.log(course.toString());





//CRUD
//Create
//await runInsertion(collection);
//Read
//await runSelection(collection);
//Update
//Delete

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