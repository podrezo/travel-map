import makeMarkerFunction from '../marker.js';

function mainController($scope, $location, $http, $rootScope, databaseService) {
  // $scope.$on('marker-clicked', (e, marker) => {
  //   console.log(marker);
  //   $scope.detailsPanelOpen = true;
  // });
  $scope.modalOpen = true;
  $scope.$on('open-panel', () => {
    $scope.detailsPanelOpen = true;
  });
  $scope.$on('close-panel', () => {
    $scope.detailsPanelOpen = false;
    $location.path('/locations');
  });
  $scope.toggleDetailsPanel = function() {
    $scope.detailsPanelOpen = !$scope.detailsPanelOpen;
  };
  $scope.toggleModal = function() {
    $scope.modalOpen = !$scope.modalOpen;
  }
  databaseService.data().then(data => {
    $rootScope.map.add(po.geoJson().features(data.features).on("load", makeMarkerFunction(po, markerClickedHandler)));
  })
  const markerClickedHandler = (locationId) => {
    $rootScope.$apply(() => {
      $rootScope.$broadcast('marker-clicked', locationId);
      $location.path(`/location/${locationId}`);
    });
  };
};

export default mainController;