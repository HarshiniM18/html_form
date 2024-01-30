document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Append values to the table
    const tableBody = document.getElementById('dataTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${food.join(',')}</td><td>${state}</td><td>${country}</td>`;

    // Clear form fields
    document.getElementById('myForm').reset();
  });
