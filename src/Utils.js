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
