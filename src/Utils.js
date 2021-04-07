export function filterSelection(c) {
  if (c == "all") c = "";
  var filterDivs = document.getElementsByClassName("filterDiv");
  Array.prototype.forEach.call(filterDivs, function(mydiv) {
    removeClass(mydiv, "show");
    if (mydiv.className.indexOf(c) > -1) addClass(mydiv, "show");
});
}

function addClass(element, name) {
  var arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  Array.prototype.forEach.call(arr2, function(el) {
    if (arr1.indexOf(el) == -1) {element.className += " " + el;}
  });
}

function removeClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  Array.prototype.forEach.call(arr2, function(el) {
    while (arr1.indexOf(el) > -1) {
      arr1.splice(arr1.indexOf(el), 1);     
    }
  });
  element.className = arr1.join(" ");
}

//  Activating filter items
export function activateFilterItem(element, name) {
  var filters = document.getElementById("filters");
  var btns = filters.getElementsByClassName("btn");
  Array.prototype.forEach.call(btns, function(el) {
    el.addEventListener("click", function(){
      var current = document.getElementsByClassName("activebtn");
      current[0].className = current[0].className.replace(" activebtn", "");
      this.className += " activebtn";
    });
  });  
}
// Activating navbar items
/*

$(document).ready(function() {
  "use strict";

  $('ul.navbar-nav > li').click(function(e) {
    $('ul.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
  });
});


*/