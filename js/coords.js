// copied from http://stackoverflow.com/questions/8678371/how-to-convert-gps-degree-to-decimal-and-vice-versa-in-jquery-or-javascript-and
export function getDMS2DD(days, minutes, seconds, direction) {
  direction.toUpperCase();
  var dd = days + minutes / 60 + seconds / (60 * 60);
  //alert(dd);
  if (direction == 'S' || direction == 'W') {
    dd = dd * -1;
  } // Don't do anything for N or E
  return dd;
}

// copied from http://stackoverflow.com/questions/8678371/how-to-convert-gps-degree-to-decimal-and-vice-versa-in-jquery-or-javascript-and
export function getDD2DMS(dms, type) {

  var sign = 1,
    Abs = 0;
  var days, minutes, seconds, direction;

  if (dms < 0) {
    sign = -1;
  }
  Abs = Math.abs(Math.round(dms * 1000000.));
  //Math.round is used to eliminate the small error caused by rounding in the computer:
  //e.g. 0.2 is not the same as 0.20000000000284
  //Error checks
  if (type == 'lat' && Abs > (90 * 1000000)) {
    //alert(' Degrees Latitude must be in the range of -90. to 90. ');
    return false;
  } else if (type == 'lng' && Abs > (180 * 1000000)) {
    //alert(' Degrees Longitude must be in the range of -180 to 180. ');
    return false;
  }

  days = Math.floor(Abs / 1000000);
  minutes = Math.floor(((Abs / 1000000) - days) * 60);
  seconds = (Math.floor(((((Abs / 1000000) - days) * 60) - minutes) * 100000) * 60 / 100000).toFixed();
  days = days * sign;
  if (type == 'lat') direction = days < 0 ? 'S' : 'N';
  if (type == 'lng') direction = days < 0 ? 'W' : 'E';
  //else return value
  return (days * sign) + 'º ' + minutes + '\' ' + seconds + '\'\' ' + direction;
}
