//1. Docker muss installiert sein. ab besten einfach docker-desktop(windows).

//2. clone repo (mongo-db version 4.0)
docker pull dubc/mongodb-4.0   

--> bis hier hin soll alles gemacht werden als Vorbereitung

//3. start container, in dem mongodb läuft (mit user)
docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_USER="user" -e MONGODB_DATABASE="mydatabase" -e MONGODB_PASS="mypass" --name mongo-4.0 dubc/mongodb-4.0


//Skript ausführen (Terminal muss im aktuellen Verzeichnis sein, da relativer-pfad!)
node .\index.js


//optionale interaktion mit der mongo-db instanz im Container mit der Mongo-Shell

//container-terminal öffnen ("id des containers" -> abfragen mit "docker ps") -> ab hier Linux
docker exec -it ["id des containers"] bash

//mongo-shell öffnen
mongo mydatabase -u user -p mypass

//Insert Document
db.employees.insertOne({name: 'John Doe', department: 4711});