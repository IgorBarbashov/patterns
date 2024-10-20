'use strict';

// Tasks for rewriting:
//   - Apply optimizations of computing resources: processor, memory
//   - Minimize cognitive complexity
//   - Respect SRP and SoC
//   - Improve readability (understanding), reliability
//   - Optimize for maintainability, reusability, flexibility
//   - Make code testable
//   - Implement simple unittests without frameworks
//   - Try to implement in multiple paradigms: OOP, FP, procedural, mixed

const data = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

const getCountriesInfo = data => data.split('\n').slice(1).map(row => row.split(','));

const getDensities = countries => countries.map(country => parseInt(country[3]));

const getMaxDensity = densities => Math.max(...densities);

const getCountriesWithNormalizedDensity = (countries, densities, maxDensity) => countries.map((country, i) => {
    const normalizedDensity = Math.round(densities[i] * 100 / maxDensity);
    return [...country, normalizedDensity.toString()];
});

const sortByDensity = countries => [...countries].sort((a, b) => b[5] - a[5]);

const outputData = (data, outputFn) => data.forEach(row => {
    const city = row[0].padEnd(18);
    const population = row[1].padStart(10);
    const area = row[2].padStart(8);
    const density = row[3].padStart(8);
    const country = row[4].padStart(18);
    const normalizedDensity = row[5].padStart(6);
    outputFn(city.concat(population, area, density, country, normalizedDensity));
});

const processData = data => {
    if (!data) {
        return;
    }

    const countriesInfo = getCountriesInfo(data);
    const densities = getDensities(countriesInfo);
    const maxDensity = getMaxDensity(densities);
    const countriesWithNormalizedDensity = getCountriesWithNormalizedDensity(countriesInfo, densities, maxDensity);
    const countriesSortedByDensity = sortByDensity(countriesWithNormalizedDensity);
    outputData(countriesSortedByDensity, console.log);
};

processData(data);
