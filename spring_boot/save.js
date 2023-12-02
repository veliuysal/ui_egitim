
function saveCar(){
var brand=document.getElementById('brand').value;
var model=document.getElementById('model').value;
var year=document.getElementById('year').value;

    fetch('http://localhost:8080/api/car', {
        method: 'POST',
        body: JSON.stringify({
            brand,
            model,
            year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}
