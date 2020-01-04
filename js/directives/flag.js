function flagDirective() {
  return {
    restrict: 'A',
    scope: {
      countryCode: '=countryCode',
      size: '=size'
    },
    link: function(scope, element, attrs) {
      var setFlagImage = function() {
        var countryCode = scope.countryCode || 'un';
        var size = scope.size || '16';
        attrs.$set('class', 'flag flag-' + size + '-' + countryCode.toLowerCase());
      };
      setFlagImage();
      scope.$watch('countryCode', setFlagImage);
    }
  };
}

export default flagDirective;