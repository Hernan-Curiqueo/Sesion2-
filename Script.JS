var form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  var digimonName = document.querySelector('#digimon-name').value;
  fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    function displayDigimonInfo(digimon) {
      var tableBody = document.querySelector('#digimon-table tbody');
      tableBody.innerHTML = '';
      
      var rowName = document.createElement('tr');
      var nameHeader = document.createElement('th');
      nameHeader.textContent = 'Nombre:';
      var nameData = document.createElement('td');
      nameData.textContent = digimon[0].name;
      rowName.appendChild(nameHeader);
      rowName.appendChild(nameData);
      tableBody.appendChild(rowName);
      
      var rowLevel = document.createElement('tr');
      var levelHeader = document.createElement('th');
      levelHeader.textContent = 'Nivel:';
      var levelData = document.createElement('td');
      levelData.textContent = digimon[0].level;
      rowLevel.appendChild(levelHeader);
      rowLevel.appendChild(levelData);
      tableBody.appendChild(rowLevel);
      
      var rowImage = document.createElement('tr');
      var imageHeader = document.createElement('th');
      imageHeader.textContent = 'Imagen:';
      var imageData = document.createElement('td');
      var digimonImage = document.createElement('img');
      digimonImage.src = digimon[0].img;
      digimonImage.alt = digimon[0].name;
      digimonImage.width = 100;
      imageData.appendChild(digimonImage);
      rowImage.appendChild(imageHeader);
      rowImage.appendChild(imageData);
      tableBody.appendChild(rowImage);
    }
      form.addEventListener('submit', event => {
        event.preventDefault();
        var digimonName = document.querySelector('#digimon-name').value;
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
          .then(response => response.json())
          .then(data => displayDigimonInfo(data))
          .catch(error => console.error(error));
      });   
      
      $(document).ready(function () {
        $("#caja1").mouseenter(function () {
        $("#caja2").show();
        })
       
       })

});
