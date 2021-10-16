//https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
function romanize (num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '',
      i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

function deromanize (str) {
  var roman = str.toUpperCase(),
      lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
      arabic = 0,
      i = roman.length;
  while (i--) {
    if ( lookup[roman[i]] < lookup[roman[i+1]] )
      arabic -= lookup[roman[i]];
    else
      arabic += lookup[roman[i]];
  }
  return arabic;
}

export default {
  toRoman: romanize,
  toArabic: deromanize
}