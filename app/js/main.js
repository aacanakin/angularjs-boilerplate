/**
 * Configure requirejs
 */

require.config({

	paths: {
		'angular': '../../bower_components/angular/angular',
		'angular-route': '../../bower_components/angular-route/angular-route'
	},
	
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			exports: 'angular-route'
		}
	},

	deps: ['./boot']
});
