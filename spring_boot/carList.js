fetch("http://localhost:8080/api/car/all")
    .then(response => {
        if (!response.ok) {
            throw new Error('API isteği başarısız. Durum Kodu: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        updateTable(data);
    })
    .catch(error => {
        console.error(error);
    });


function updateTable(data) {
    const tableBody = document.getElementById('table-body');
    const row = document.createElement('tr');
    
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
         <td>${item.id}</td>
         <td>${item.brand}</td>
         <td>${item.model}</td>
         <td>${item.year}</td>
       `;

        var guncelleBtn = document.createElement("button");
        guncelleBtn.innerHTML = "Güncelle";
        guncelleBtn.onclick = function () {
            document.getElementById('saveCar').innerHTML = 'Araba Güncelle';
            console.log("Güncelle", item)
        }
        guncelleBtn.type = "button";
        row.appendChild(guncelleBtn);

        tableBody.appendChild(row);
    });
}


