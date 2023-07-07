fetch('https://your-website.com/path/to/cars.json')
  .then(response => response.json())
  .then(data => {
    // Process the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

  