/* Creating active class*/

/*opening*/
document.querySelector("#show-form").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

/*closing*/
document.querySelector(".popup  .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});
docu