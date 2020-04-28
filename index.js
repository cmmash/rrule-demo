const ruleDemo = require('./rule');
const ruleSetDemo = require('./ruleSet');

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
	const welcome = '<h3>Welcome to rrule demo!</h3>';
	let navigation = '<ul>';
	navigation += '<li><a href="/rule">RRule demo</a></li>';
	navigation += '<li><a href="/set">RRule Set demo</a></li>';
	navigation += '</ul>';
	res.send(welcome+navigation);
})

app.get('/rule', (req, res) => {

	let msg = '<a href="/">Back</a><br><br><hr>';
    msg += '<h1>rrule SINGLE RULE demo</h1>'; //write a response
    msg += `<br><div>${ruleDemo()}<div>`; //write a response
	res.send(msg);
})

app.get('/set', (req, res) => {

	let msg = '<a href="/">Back</a><br><br><hr>';
    msg += '<h1>rrule RULE SET demo</h1>'; //write a response
    msg += `<br><div>${ruleSetDemo()}<div>`; //write a response
	res.send(msg);
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
