document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    
    const maleRadio = document.querySelector('input[name="gender"][value="male"]');
    const femaleRadio = document.querySelector('input[name="gender"][value="female"]');
    const gender = (maleRadio && maleRadio.checked) ? 'male' : (femaleRadio && femaleRadio.checked) ? 'female' : '';

    const selectedFoods = document.querySelectorAll('input[name="food"]:checked');
  
  
  if (selectedFoods.length < 2) {
    alert('Please choose at least 2 food options.');
    return;
  }

  const foodValues = Array.from(selectedFoods).map(checkbox => checkbox.value);
   const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const tableBody = document.getElementById('dataTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${foodValues.join(',')}</td><td>${state}</td><td>${country}</td>`;


    document.getElementById('myForm').reset();
});

