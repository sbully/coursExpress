const express = require('express');
const ets = require('./ets.js');

const app = express();


const employees = {
	jack: new ets.Employee("Jack", ''),
	john: new ets.Employee("Johnny", ''),
	toto: new ets.Employee("Toto", ''),
	rambo: new ets.Manager("Rambo", 'Direction'),
	sandy: new ets.Developer("sandy")
};

app.get('/', function (requete, reponse) {
	reponse.setHeader("Content-Type", "application/json; charset=utf-8")
	reponse.send('{"result":"Hello"}');
});

app.get('/employees', function (requete, reponse) {
	reponse.setHeader("Content-Type", "application/json; charset=utf-8")
	let json = JSON.stringify(employees);

	reponse.send(json);
});

app.get('/employee', function (requete, reponse) {
	let nom = requete.query.nom;

	let employees_keys = Object.keys(employees);

	console.log(employees_keys);

	/* if (employees_keys.includes(nom)) */
	if (nom in employees) {
		let nom_employee = employees[nom];
		console.log(nom_employee);

	} else {
		console.log("objet non trouvé");
	}

	reponse.setHeader("Content-Type", "application/json; charset=utf-8")
	let json = JSON.stringify(employees);

	reponse.send(json);
});

app.get('/user/:nom', function (requete, reponse) {
	let nom = requete.params.nom;

	/* let employees_keys = Object.keys(employees); */

	/* console.log(employees_keys); */

	/* if (employees_keys.includes(nom)) */
	if (nom in employees) {
		let nom_employee = employees[nom];
		console.log(nom_employee);

	} else {
		console.log("objet non trouvé");
	}

	reponse.setHeader("Content-Type", "application/json; charset=utf-8")
	let json = JSON.stringify(employees);

	reponse.send(json);
});

app.use((req, res, next) => {

	res.redirect('/');

});

app.listen(8080);