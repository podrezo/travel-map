// extension for polymaps to convert markers from a black dot into something more interesting
// returns a *function* that will do the conversion, based on options provided
function makeMarkerFunction(po, markerClickedCallback) {
  // opts:
  // clickable [bool]: Whether or not the marker can be clicked, which will link to that place
  var replaceMarker = function(e) {
    for (var i = 0; i < e.features.length; i++) {
      var f = e.features[i],
        c = f.element,
        g = f.element = po.svg('image');
      g.setAttributeNS(po.ns.xlink, 'href', `img/markers/${f.data.properties.icon || 'comment-map-icon'}.png`);
      g.setAttribute('width', 32);
      g.setAttribute('height', 37);
      g.setAttribute('x', -16);
      g.setAttribute('y', -37);
      g.setAttribute('transform', c.getAttribute('transform'));
      g.setAttribute('data-id', f.data.id); // store the index within the element itself for reference
      //
      if (markerClickedCallback) {
        g.style['cursor'] = 'pointer';
        g.onclick = function(self) {
          markerClickedCallback(self.srcElement.getAttribute('data-id'));
        };
      }
      c.parentNode.replaceChild(g, c);
    }
  };
  return replaceMarker;
};

export default makeMarkerFunction;