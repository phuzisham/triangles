$(document).ready(function() {
  $("form#tri").submit(function(event) {
    event.preventDefault();
    var x = $("#side1").val();
    var y = $("#side2").val();
    var z = $("#side3").val();
    var xx = parseInt(x);
    var yy = parseInt(y);
    var zz = parseInt(z);

    if(x.match(/^\D+$/) || y.match(/^\D+$/) || z.match(/^\D+$/)) {
     alert("Please enter only numbers...");
      return;
   } if (xx == yy && xx == zz && yy == zz) {
     $("#equil").show();
     $("#wrong, #isos, #scal").hide();
   } else if ((xx + yy) <= zz || (xx + zz) <= yy || (zz + yy) <= xx) {
     $("#wrong").show();
     $("#equil, #isos, #scal").hide();
   } else if (xx == yy || xx == zz || yy == zz) {
     $("#isos").show();
     $("#equil, #wrong, #scal").hide();
   } else {
     $("#scal").show();
     $("#equil, #wrong, #isos").hide();
   }
  });
});
