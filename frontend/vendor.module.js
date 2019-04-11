/**
 * Load all 3rd party imports here so it'll be
 * directly included in vendor.bundle.js file.
 * these are names of folders that are located inside node_modules folder
 * import only files that are required by angular do not import files like babel etc
 * because they are used for generating minified css & js files
 * How to identify which files to import and which files to ignore?
 * You must ignore all files enclosed within devDependencies and import files
 * enclosed within "dependencies"
 * 
 *   "keywords": [],
 *   "author": "Dexter McConnell",
 *   "license": "ISC",
 *   "devDependencies": {
 *       "babel-core": "6.26.3",
 *       "babel-loader": "7.1.1",
 *        ...
 *        ...
 *    },
 *   "dependencies": {
 *      "angular": "1.7.8",
 *      "angular-acl": "^0.1.10",
 *      "angular-bootstrap": "^0.12.2",
 *      ....
 *      ....
 *   }
 * 
 */
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'datatables.net-bs4';
import 'datatables.net';
import 'angular-ui-router';
import 'sweetalert';
import 'satellizer';
import 'restangular';
import 'ngstorage';
import 'checklist-model';
import 'angular-loading-bar';
import 'angular-datatables';
import 'angular-chart.js';
import 'angular-acl';
import 'angular-bootstrap';

