const table = document.getElementsByTagName('table')[0];

for (let i = 0; i < 5; i++){
    table.tHead.rows[0].cells[i].style.backgroundColor = 'violet';
}

for (let i = 0; i < 5; i++){
    table.tBodies[0].rows[0].cells[i].style.backgroundColor = 'indigo';
}
for (let i = 0; i < 5; i++){
    table.tBodies[0].rows[1].cells[i].style.backgroundColor = 'blue';
}
for (let i = 0; i < 5; i++){
    table.tBodies[0].rows[2].cells[i].style.backgroundColor = 'green';
}
for (let i = 0; i < 5; i++){
    table.tBodies[0].rows[3].cells[i].style.backgroundColor = 'yellow';
}
for (let i = 0; i < 5; i++){
    table.tBodies[0].rows[4].cells[i].style.backgroundColor = 'orange';
}

for (let i = 1; i < 5; i+=2){
    console.log(table.tBodies[0].rows[0].cells[i].innerText);
}
for (let i = 0; i < 5; i+=2){
    console.log(table.tBodies[0].rows[1].cells[i].innerText);
}
for (let i = 1; i < 5; i+=2){
    console.log(table.tBodies[0].rows[2].cells[i].innerText);
}
for (let i = 0; i < 5; i+=2){
    console.log(table.tBodies[0].rows[3].cells[i].innerText);
}
for (let i = 1; i < 5; i+=2){
    console.log(table.tBodies[0].rows[4].cells[i].innerText);
}