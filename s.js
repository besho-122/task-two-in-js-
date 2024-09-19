
var names = ["Ahmad", "Anas", "Mohammad", "Nihad", "Soso"];
var data = '';
for (var i = 0; i < names.length; i++) {
    data += `<tr><td>${names[i]}</td></tr>`; 
}
document.querySelector("tbody").innerHTML = data;

addName =function(){
    
       var newName = document.getElementById('name').value;
        names.push(newName);
        data = '';
        for (var i = 0; i < names.length; i++) {
            data += `<tr><td>${names[i]}</td></tr>`;
        }
        document.querySelector("tbody").innerHTML = data;
    
        

}