var popupoverlay = document.querySelector(".popup-overlay");
var popupboxs = document.querySelector(".popupbox");
var addpopupbutton = document.querySelector(".add-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupboxs.style.display = "block";
});

var cancelbutton = document.getElementById("cancel_pop_up"); // ✅ Bug 1 fixed
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupboxs.style.display = "none";
});

var contain = document.querySelector(".container");
var addbutton = document.getElementById("add-book"); // ✅ Bug 2 & 6 fixed
var addbook = document.getElementById("book-title");
var addauthor = document.getElementById("book-author");
var adddescription = document.getElementById("book-description");

addbutton.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container"); // ✅ Bug 3 fixed
    div.innerHTML = `
        <h2>${addbook.value}</h2>
        <h5>${addauthor.value}</h5>
        <p>${adddescription.value}</p>
        <button onclick="deletebook(event)">Delete</button>`;
    contain.append(div);
    popupoverlay.style.display = "none";
    popupboxs.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove(); // ✅ Bug 4 fixed
}
