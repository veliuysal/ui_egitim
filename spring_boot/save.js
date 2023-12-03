
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


function clearSaveForm() {
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
}
