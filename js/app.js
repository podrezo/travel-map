import mainController from './controllers/main.js';
import detailsController from './controllers/details.js';
import databaseService from './services/db.js';
import flagDirective from './directives/flag.js';
import friendlyCoordsDirective from './directives/friendly-coords.js';
const module = angular.module('travelMap', [
  'ngRoute', // angular routing
  'ng-showdown' // convert markdown to HTML for descriptions
]);

module.service('databaseService', databaseService);
module.controller('detailsController', detailsController);
module.controller('mainController', mainController);
module.directive('flag', flagDirective);
module.directive('friendlyCoords', friendlyCoordsDirective);

module.config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/locations', {
      template: ''
    }).
    when('/about', {
      controller: 'detailsController',
      templateUrl: 'templates/about.html'
    }).
    when('/location/:locationId', {
      controller: 'detailsController',
      templateUrl: 'templates/location_details.html'
    }).
    otherwise('/about');
}
]);

module.run(function($rootScope) {
  $rootScope.detailsPanelOpen = false;
  window.po = org.polymaps;
  $rootScope.map = po.map()
    .container(document.getElementById('map').appendChild(po.svg('svg')))
    .zoomRange([0, 9])
    .zoom(3)
    .add(po.image().url('http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg'))
    .add(po.interact())
    .add(po.compass().pan('none'));
});