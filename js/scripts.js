$(document).ready(function() {
  $("form#tri").submit(function() {

    var x = $("#side1").val();
    var y = $("#side2").val();
    var z = $("#side3").val();
    var xx = parseInt(x);
    var yy = parseInt(y);
    var zz = parseInt(z);

    if(x.match(/^\D+$/) || y.match(/^\D+$/) || z.match(/^\D+$/)) {
     alert("Please enter only numbers...");
   } if (xx == yy && xx == zz && yy == zz) {
     alert('Equilateral');
   } else if ((xx + yy) <= zz || (xx + zz) <= yy || (zz + yy) <= xx) {
     alert('That aint a triangle!');
   } else if (xx == yy || xx == zz || yy == zz) {
     alert('Isosceles')
   } else {
     alert('Scalene');
   }
  });
});
