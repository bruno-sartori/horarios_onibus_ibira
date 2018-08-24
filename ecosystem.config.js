module.exports = {
	/**
	* Application configuration section
	* http://pm2.keymetrics.io/docs/usage/application-declaration/
	*/
	apps: [
		{
			name: 'API',
			script: 'scripts/start-production.js',
			env: {
				COMMON_VARIABLE: 'true',
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production',
				REACT_APP_PORT: '80',
				REACT_APP_HOST: 'jdnet.com.br',
				REACT_APP_A_PARTIR_FIBRA: '79,90',
				REACT_APP_A_PARTIR_RADIO: '69,90',

				REACT_APP_FIBRA_RESIDENCIAL_1: '79,90|10|2',
				REACT_APP_FIBRA_RESIDENCIAL_2: '99,90|20|4',
				REACT_APP_FIBRA_RESIDENCIAL_3: '119,90|30|6',
				REACT_APP_FIBRA_RESIDENCIAL_4: '169,90|50|10',
				REACT_APP_FIBRA_RESIDENCIAL_5: '269,90|100|20',

				REACT_APP_FIBRA_EMPRESARIAL_1: '129,90|30|15',
				REACT_APP_FIBRA_EMPRESARIAL_2: '199,90|50|25',
				REACT_APP_FIBRA_EMPRESARIAL_3: '299,90|100|50',

				REACT_APP_RADIO_RESIDENCIAL_1: '69,90|2|400',
				REACT_APP_RADIO_RESIDENCIAL_2: '89,90|3|600',
				REACT_APP_RADIO_RESIDENCIAL_3: '109,90|4|800',

				REACT_APP_RADIO_EMPRESARIAL_1: '109,90|2|1',
				REACT_APP_RADIO_EMPRESARIAL_2: '129,90|3|1,5',
				REACT_APP_RADIO_EMPRESARIAL_3: '149,90|4|2',

				REACT_APP_MAIL_FROM: 'site@jdnet.com.br',
				REACT_APP_MAIL_FROM_PASS: 'isp@710',
				REACT_APP_MAIL_TO: 'atendimento@jdnet.com.br'

			}
		}
	],

	/**
	* Deployment section
	* http://pm2.keymetrics.io/docs/usage/deployment/
	*/
	deploy: {
		production: {
			user: 'node',
			host: '212.83.163.1',
			ref: 'origin/master',
			repo: 'git@github.com:repo.git',
			path: '/var/www/production',
			'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
		},
		dev: {
			user: 'node',
			host: '212.83.163.1',
			ref: 'origin/master',
			repo: 'git@github.com:repo.git',
			path: '/var/www/development',
			'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
			env: {
				NODE_ENV: 'dev'
			}
		}
	}
};
