1.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia
    const asiaCountries = data.filter(country => {
      return country.region && country.region.includes('Asia');
    });

    // Log the list of Asia countries
    console.log(asiaCountries);
  })
  .catch(error => console.error('Error fetching data:', error));

2.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries with a population less than 200,000
    const countriesWithLowPopulation = data.filter(country => {
      return country.population && country.population < 200000;
    });

    // Log the list of countries with low population
    console.log(countriesWithLowPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));

3.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate through each country and print name, capital, and flag
    data.forEach(country => {
      const name = country.name.common || 'N/A';
      const capital = country.capital || 'N/A';
      const flag = country.flags.png || 'N/A';

      console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

4.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Calculate total population using reduce function
    const totalPopulation = data.reduce((accumulator, country) => {
      // Check if population is available before adding
      return accumulator + (country.population || 0);
    }, 0);

    console.log(`Total Population: ${totalPopulation}`);
  })
  .catch(error => console.error('Error fetching data:', error));

5.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries that use US dollar as currency
    const usDollarCountries = data.filter(country => {
      return country.currencies && country.currencies.hasOwnProperty('USD');
    });

    // Print the names of countries that use US dollar
    usDollarCountries.forEach(country => {
      const name = country.name.common || 'N/A';
      console.log(`Country using US Dollar: ${name}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
