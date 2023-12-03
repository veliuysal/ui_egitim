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
            document.getElementById('arabaFromTitle').innerHTML = 'Araba Güncelleme Formu'; 
            document.getElementById('brand').value = item.brand;
            document.getElementById('model').value = item.model;
            document.getElementById('year').value = item.year;
            
            
        }
        guncelleBtn.type = "button";
        row.appendChild(guncelleBtn);

        tableBody.appendChild(row);
    });
}

function updateCar() {
    var brand = document.getElementById('brand').value;
    var model = document.getElementById('model').value;
    var year = document.getElementById('year').value;

    fetch('http://localhost:8080/api/car', {
        method: 'PUT',
        body: JSON.stringify({
            brand,
            model,
            year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(async (response) => {
        if (!response.ok) {
            let errorMsg = await response.text();
            alert(errorMsg);
            throw new Error('Gönderi oluşturma başarısız. Durum Kodu: ' + response.status);
        }
        return response.json();
    }).then((json) => {
        console.log('Oluşturulan Gönderi:', json);
        // İsteği başarıyla tamamladığınızı kullanıcıya bildirebilirsiniz
        alert('Gönderi başarıyla güncellendi!');
        // Formu temizle
        clearSaveForm();
    })
        .catch((error) => {
            console.error(error);
        });
}

function clearSaveForm() {
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
}

function saveCar() {
    var brand = document.getElementById('brand').value;
    var model = document.getElementById('model').value;
    var year = document.getElementById('year').value;

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
    }).then(async (response) => {
        if (!response.ok) {
            let errorMsg = await response.text();
            alert(errorMsg);
            throw new Error('Gönderi oluşturma başarısız. Durum Kodu: ' + response.status);
        }
        return response.json();
    }).then((json) => {
        console.log('Oluşturulan Gönderi:', json);
        // İsteği başarıyla tamamladığınızı kullanıcıya bildirebilirsiniz
        alert('Gönderi başarıyla oluşturuldu!');
        // Formu temizle
        clearSaveForm();
    })
        .catch((error) => {
            console.error(error);
        });
}

