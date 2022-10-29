import collection from './mongo_access/db.js';

//CRUD
//Create
await runInsertion(collection);
//Read
await runSelection(collection);
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