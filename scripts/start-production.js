'use strict';

const cors = require('cors');
const path  = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const getClientEnvironment = require('../config/env');
// Lê o .env e mais algumas váriaveis de enviroment
process.env = getClientEnvironment('../').raw;

console.log(JSON.stringify(process.env));

const app = express();
const DIST_DIR  = path.join(__dirname, "../build");
const HTML_FILE = path.join(DIST_DIR, "index.html");

console.log(DIST_DIR);

app.use(cors({ origin: ['http://jdnet.com.br:21167', 'http://jdnet.com.br', 'jdnet.com.br', 'jdnet.com.br:21167'] }));
app.use(express.static(DIST_DIR));
app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
	const nodemailer = require('nodemailer');
	//const smtpTransport = require('nodemailer-smtp-transport');
	const moment = require('moment');

	const text = `Nova Mensagem - Via Site<br />
	<b>Nome:</b> ${req.body.nome} <br />
	<b>E-mail:</b> ${req.body.email} <br />
	<b>Cidade:</b> ${req.body.cidade} <br />
	<b>Telefone:</b> ${req.body.telefone} <br /><br />
	<b>********** MENSAGEM **********</b><br /><br />
	${req.body.mensagem}<br /><br /><br />
	<span style='font-size:11px;'>Enviado em: ${moment().format('DD/MM/YYYY HH:ii:ss')}</span>`;

	const transport = nodemailer.createTransport({
		host: 'smtp.kinghost.net',
		port: 587,
		secure: false,
		auth: {
			user: process.env.REACT_APP_MAIL_FROM,
			pass: process.env.REACT_APP_MAIL_FROM_PASS
		}
	});

	transport.sendMail({
		from: process.env.REACT_APP_MAIL_FROM,
		to: process.env.REACT_APP_MAIL_TO,
		subject: 'Mensagem via Site',
		html: text
	}, (err) => {
		if (err) {
			res.status(422).json({error: err.message });
		} else {
			res.status(200).json({success: "Enviado com sucesso "});
		}
	});
});

app.all("*", (req, res, next) => { console.log("AQUI"); next(); });

app.get("*", (req, res) => res.sendFile(HTML_FILE));

app.listen(process.env.REACT_APP_PORT, () => {
	console.log(`React App listening on ${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`);
});
