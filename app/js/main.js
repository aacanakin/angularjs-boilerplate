/**
 * Configure requirejs
 */

require.config({

	paths: {
		// 'domReady': '../../bower_components/requirejs-domready/domReady',
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
