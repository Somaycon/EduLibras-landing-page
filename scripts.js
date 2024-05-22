document.getElementById('arrow-button').addEventListener('click', function () {
  const dropdownContainer = document.getElementById('dropdown-container');
  if (dropdownContainer.style.display === 'none' || dropdownContainer.style.display === '') {
    dropdownContainer.style.display = 'flex';
  } else {
    dropdownContainer.style.display = 'none';
  }
});
