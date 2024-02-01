function navigateToSection() {
    var selectedOption = document.getElementById("selectOption").value;
  
    // Hide all sections
    document.querySelectorAll('.sections-container .card').forEach(function(section) {
      section.style.display = 'none';
    });
  
    // Show the selected section
    var selectedSection = document.querySelector('.' + selectedOption + '-section');
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  