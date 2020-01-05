import countryData from '../../data/countries.js';

function getStats(locations) {
  const cities = _.chain(locations)
    .pluck('properties')
    .pluck('name')
    .uniq()
    .value();
  const countries = _.chain(locations)
    .pluck('properties')
    .pluck('countryCode')
    .uniq()
    .map(alpha2code => _.find(countryData, c => c['alpha-2'] == alpha2code))
    .value();
  const regions = _.chain(countries)
    .pluck('sub-region')
    .uniq()
    .value();
  const continents = _.chain(countries)
    .pluck('region')
    .uniq()
    .value();
  return {
    cities: {
      count: cities.length,
      names: cities
    },
    countries: {
      count: countries.length,
      names: countries
    },
    regions: {
      count: regions.length,
      names: regions
    },
    continents: {
      count: continents.length,
      names: continents
    }
  };
}

function databaseService($http, $rootScope, $q) {
  let dbCache = null;
  const data = function() {
    let deferred = $q.defer();
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
        // calculate stats and cache them
        $rootScope.travelStats = getStats(dbCache.features);
        console.log($rootScope.travelStats);
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