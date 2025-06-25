const unitRadios = document.querySelectorAll('input[name="unit"]');
const dropdownContainers = document.querySelectorAll('.dropdown-container');
const totalPriceDisplay = document.getElementById('total-price');

const prices = {
  1: 10.0,
  2: 18.0,
  3: 24.0,
};

function createDropdownRow(index) {
  const row = document.createElement('div');
  row.className = 'dropdown-row';

  const size = document.createElement('select');
  ['S', 'M', 'L'].forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    size.appendChild(option);
  });

  const color = document.createElement('select');
  ['Black', 'Red', 'Blue'].forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    color.appendChild(option);
  });

  row.innerHTML = `#${index + 1}&nbsp;`;
  row.appendChild(size);
  row.appendChild(color);

  return row;
}

function handleUnitChange(e) {
  const selectedValue = parseInt(e.target.value);

  dropdownContainers.forEach(container => {
    container.innerHTML = '';
    const units = parseInt(container.getAttribute('data-units'));
    if (units === selectedValue) {
      for (let i = 0; i < units; i++) {
        container.appendChild(createDropdownRow(i));
      }
    }
  });

  totalPriceDisplay.textContent = `$${prices[selectedValue].toFixed(2)} USD`;
}

unitRadios.forEach(radio => {
  radio.addEventListener('change', handleUnitChange);
});
