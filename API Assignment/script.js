function searchCountry() {
    const searchInput = document.getElementById('searchInput').value;

    // Use the restcountries.com API to fetch country data
    fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
        .then(response => response.json())
        .then(data => {
            // Process and display the data in the result grid
            displayResults(data);
        })
        .catch(error => console.error('Error fetching country data:', error));
}

function displayResults(data) {
    const resultGrid = document.getElementById('resultGrid');
    resultGrid.innerHTML = '';

    data.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('card', 'mb-3');

        // Customize the card content based on your preferences
        countryCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <button class="btn btn-info" onclick="showMoreDetails('${country.cca2}')">More Details</button>
            </div>
        `;

        resultGrid.appendChild(countryCard);
    });
}

function showMoreDetails(countryCode) {
    // Use a weather API to fetch additional country-specific data (flag, population, capital, etc.)
    // Update the UI with the detailed information
    // You can use another fetch request similar to the one in searchCountry function
}
