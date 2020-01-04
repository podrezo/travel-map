import countryData from '../../data/country-codes.js';

function detailsController($scope, $routeParams, $http, $location, databaseService) {
  $scope.locationId = $routeParams.locationId;
  $scope.$emit('open-panel');
  $scope.toggleDetailsPanel = function() {
    $scope.$emit('close-panel');
  };
  // $scope.$on('db-loaded', () => {
  //   $location.reload();
  // });
  databaseService.data().then(data => {
    $scope.place = data.features.find(feature => feature.id == $scope.locationId);
    $scope.country = countryData.find(country => country['alpha-2'] == $scope.place.properties.countryCode);
  });
  $http({
    method: 'GET',
    url: `data/descriptions/${$scope.locationId}.md`
  })
  .then(result => {
    $scope.description = result.data;
  })
  .catch(e => {
    if (e.status === 404) {
      $scope.description = `*No description was provided.*`;
    } else {
      $scope.description = `*Description could not be loaded. Error code: ${e.status}*`;
    }
  });
};

export default detailsController;