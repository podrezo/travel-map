import { getDD2DMS } from '../coords.js';

function friendlyCoordsDirective() {
  return {
    restrict: 'A',
    scope: {
      lat: '@lat',
      lng: '@lng'
    },
    link: function(scope, element, attrs) {
      scope.$watch('lat', () => {
        scope.friendlyLat = getDD2DMS(scope.lat, 'lat');
      });
      scope.$watch('lng', () => {
        scope.friendlyLng = getDD2DMS(scope.lng, 'lng');
      });
    },
    template: '{{ friendlyLat }}, {{ friendlyLng }}'
  };
}

export default friendlyCoordsDirective;