// JavaScript for mode switching and other interactions
document.addEventListener('DOMContentLoaded', () => {
  const modeSwitchButton = document.getElementById('mode-switch-button');
  const body = document.body;

  // Function to toggle dark mode
  function toggleDarkMode() {
      body.classList.toggle('dark-mode');
  }

  // Event listener for mode switch button
  modeSwitchButton.addEventListener('click', toggleDarkMode);

  // Function to fetch and display client and vendor data
  async function fetchData() {
      try {
          const response = await fetch('data.json'); // Replace with your data source
          const data = await response.json();
          
          // Process and display client data
          const clientList = document.getElementById('client-list');
          data.clients.forEach(client => {
              const clientItem = document.createElement('div');
              clientItem.classList.add('client-item');
              clientItem.textContent = client.name;
              clientList.appendChild(clientItem);
          });

          // Process and display vendor data
          const vendorList = document.getElementById('vendor-list');
          data.vendors.forEach(vendor => {
              const vendorItem = document.createElement('div');
              vendorItem.classList.add('vendor-item');
              vendorItem.textContent = vendor.name;
              vendorList.appendChild(vendorItem);
          });
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  // Call the fetchData function to load client and vendor data
  fetchData();
});
