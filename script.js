document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    
    const maleRadio = document.querySelector('input[name="gender"][value="male"]');
    const femaleRadio = document.querySelector('input[name="gender"][value="female"]');
    const gender = (maleRadio && maleRadio.checked) ? 'male' : (femaleRadio && femaleRadio.checked) ? 'female' : '';

  


    const tableBody = document.getElementById('dataTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td>`;


    document.getElementById('myForm').reset();
});

