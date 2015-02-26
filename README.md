angularjs-structured
====================

A sample app structure on building structured web apps with angularjs
=======
This repository is a simple angular app that brings modularization to angular.js using require.js. 

Installation
------------
- Clone the repo
- Run `bower install`

Directory Structure
-------------------
```
.
├── app
│   ├── css
│   │   └── app.css                 # app css file
│   ├── img                         # image folder
│   ├── js
│   │   ├── app.js                  # the definition of app module
│   │   ├── controllers             # folder contains controllers
│   │   │   ├── HelloController.js
│   │   │   ├── index.js
│   │   │   └── module.js
│   │   ├── directives              # folder contains custom directives
│   │   │   ├── index.js
│   │   │   └── module.js
│   │   ├── filters                 # folder contains custom filters
│   │   │   ├── index.js
│   │   │   └── module.js
│   │   ├── main.js                 # entry point of angular app
│   │   ├── routes.js               # file contains angular route definitions
│   │   └── services                # folder contains services
│   │       ├── index.js
│   │       └── module.js
│   └── views                       # folder contains angular templates
│       └── hello.html
├── bower.json
└── index.html
```

Modules
-------
In this structure, all modules have `index.js` & `module.js` files. `module.js` file contains the module definition like the following;
```js
// module.js
define(['angular'], function(angular) {

    'use strict';
    return angular.module('app.controllers', []);
});

// index.js
define([

    './HelloController'
    // module files should be included here

], function() {});
```

Adding a new module
-------------------
Adding a new module to the system is really easy.
- Create a folder inside app folder

```sh
$ mkdir custom_module
```

- Add `module.js` & `index.js` files

```js
// module.js
define(['angular'], function(angular) {

    'use strict';
    return angular.module('custom_module', []);
});

// index.js
define([

    './FileInsideCustomModule'

], function(){});
```

- Add the dependency into app
```js
define([

    'angular',
    'angularRoute',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index',
    './custom_module/index' // here we added index file

], function(angular) {

    console.log("creating app module");

    'use strict';

    return angular.module('app', [

        'ngRoute',
        'app.controllers',
        'app.services',
        'app.directives',
        'app.services',
        'custom_module' // here we added module dependency

    ]);
});
```

That's it!
