// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",myfunction);
var arr = JSON.parse(localStorage.getItem("schedule")) || [];
function myfunction()
{
    event.preventDefault();
    var obj ={
        matchNum : document.querySelector("#matchNum").value,
        teamA : document.querySelector("#teamA").value,
        teamB : document.querySelector("#teamB").value,
        date : document.querySelector("#date").value,
        venue : document.querySelector("#venue").value,
    }
    arr.push(obj);
    localStorage.setItem("schedule",JSON.stringify(arr));
    //console.log(arr);
}
