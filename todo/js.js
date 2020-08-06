// Create a "close" button and append it to each list item
var todo;
var retrievedData = localStorage.getItem("quentinTarantino");
var todos = retrievedData;
if (retrievedData) {
    todo = todos;
}else{
  todo = '<li class="">Reservoir Dogs</li><li class="">Pulp Fiction</li><li class="">Jackie Brown</li><li class="">Kill Bill</li><li class="">Death Proof</li><li class="">Inglourious Basterds</li>';
localStorage.setItem("quentinTarantino", todo);
}
  document.getElementById("myUL").innerHTML = todo;
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
       var todo = document.getElementById("myUL").innerHTML;
localStorage.setItem("quentinTarantino", todo);
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    var todo = document.getElementById("myUL").innerHTML;
localStorage.setItem("quentinTarantino", todo);
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
    var todo = document.getElementById("myUL").innerHTML;
localStorage.setItem("quentinTarantino", todo);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function resetdata(){
  localStorage.removeItem("quentinTarantino");
}