fetch("http://localhost:8080/api/car/1975")
.then(response => {
    if (!response.ok) {
        throw new Error('API isteği başarısız. Durum Kodu: ' + response.status);
    }
    return response.json();
})
.then(data => {
    updateTable2(data);
})
.catch(error => {
    console.error(error);
});


function updateTable2(data) {
    console.log("response :" + data)
    console.log("response :" + data.id)

    const tableBody = document.getElementById('table-body-2');
    const row = document.createElement('tr');
   /* row.innerHTML = `
      <td>${data.id}</td>
      <td>${data.brand}</td>
      <td>${data.model}</td>
      <td>${data.year}</td>
    `;

    tableBody.appendChild(row);*/

    // API'den gelen verileri döngü ile tabloya ekleyin
       data.forEach(item => {
           const row = document.createElement('tr');
           row.innerHTML = `
         <td>${item.id}</td>
         <td>${item.brand}</td>
         <td>${item.model}</td>
         <td>${item.year}</td>
       `;
   
           tableBody.appendChild(row);
       });
}