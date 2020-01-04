function databaseService($http, $rootScope, $q) {
  var dbCache = null;
  var data = function() {
    var deferred = $q.defer();
    if (dbCache) {
      deferred.resolve(dbCache);
    } else {
      $http({
        method: 'GET',
        url: 'data/locations.geojson'
      })
      .then(function successCallback(results) {
        dbCache = results.data;
        $rootScope.$broadcast('db-loaded', dbCache);
        deferred.resolve(dbCache);
      }, function errorCallback(response) {
        alert('Could not load the static database file. Please refresh the page and try again.');
        deferred.reject();
      });
    }
    return deferred.promise;
  };
  return {
    data: data
  };
}

export default databaseService;