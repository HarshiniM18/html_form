function submitForm() {
    var formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      address: document.getElementById('address').value,
      pincode: document.getElementById('pincode').value,
      gender: document.getElementById('gender').value,
      foodChoices: Array.from(document.getElementById('foodChoices').selectedOptions).map(option => option.value),
      state: document.getElementById('state').value,
      country: document.getElementById('country').value,
    };

    // Validate at least 2 food choices selected
    if (formData.foodChoices.length < 2) {
      alert("Please select at least 2 food choices.");
      return;
    }

    // Append data to the table
    var tableBody = document.getElementById('dataTableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    for (var key in formData) {
      var cell = newRow.insertCell();
      cell.appendChild(document.createTextNode(formData[key]));
    }

    // Clear the form fields
    document.getElementById('myForm').reset();
  }