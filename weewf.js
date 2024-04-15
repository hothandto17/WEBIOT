// Check if localStorage has a selectedTab key
if (localStorage.getItem('selectedTab')) {
    // If yes, set the selected tab based on the stored value
    showTab(localStorage.getItem('selectedTab'));
  } else {
    // If no, default to the first tab
    showTab(1);
  }
  
  // Function to change the active tab
  function changeTab(tabIndex) {
    // Set the selectedTab key in localStorage
    localStorage.setItem('selectedTab', tabIndex);
    // Show the selected tab
    showTab(tabIndex);
  }
  
  // Function to show the selected tab
  function showTab(tabIndex) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
  
    // Show the selected tab
    document.getElementById(`tab${tabIndex}`).style.display = 'block';
  }
  