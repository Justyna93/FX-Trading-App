var http = require('http');
const express = require('express');
const app = express()

const data = [
	{
		"pair": "USD CHF",
		"buy": 0.99143,
		"sell": 0.99043
	},
	{
		"pair": "GBP USD",
		"buy": 1.28495,
		"sell": 1.2836
	},
	{
		"pair": "GBP CHF",
		"buy": 1.27378,
		"sell": 1.27147
	},
	{
		"pair": "EUR SEK",
		"buy": 9.632,
		"sell": 9.6055
	},
	{
		"pair": "USD JPY",
		"buy": 110.467,
		"sell": 110.417
	},
	{
		"pair": "EUR JPY",
		"buy": 120.589,
		"sell": 120.491
	}
];

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.send(JSON.stringify(data));
})

app.listen(3000, () => console.log('Listening...'));