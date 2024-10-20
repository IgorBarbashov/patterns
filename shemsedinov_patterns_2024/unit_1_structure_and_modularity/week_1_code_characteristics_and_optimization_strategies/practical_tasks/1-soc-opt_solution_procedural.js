'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

// Tasks for rewriting:
//   - [memory - ?] Apply optimizations of computing resources: processor, memory
//   - [done] Minimize cognitive complexity
//   - [done] Respect SRP and SoC
//   - [done] Improve readability (understanding), reliability
//   - [done] Optimize for maintainability, reusability, flexibility
//   - [done] Make code testable
//   - [done] Implement simple unittests without frameworks
//   - [in progress] Try to implement in multiple paradigms: OOP, FP, procedural, mixed

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

const getCountriesInfo = data => data.split('\n').slice(1).map(row => {
    const cells = row.split(',').map(cell => cell.trim());
    return [cells[0], cells[1], cells[2], parseInt(cells[3]), cells[4]];
});

const getDensities = countries => countries.map(country => country[3]);

const getMaxDensity = densities => Math.max(...densities);

const getCountriesWithNormalizedDensity = (countries, maxDensity) => countries.map((country, i) => {
    const normalizedDensity = Math.round(country[3] * 100 / maxDensity);
    return [...country, normalizedDensity];
});

const sortByNormalizedDensity = countries => [...countries].sort((a, b) => b[5] - a[5]);

const formatData = data => data.map(row => {
    const city = row[0].padEnd(18);
    const population = row[1].padStart(10);
    const area = row[2].padStart(8);
    const density = row[3].toString().padStart(8);
    const country = row[4].padStart(18);
    const normalizedDensity = row[5].toString().padStart(6);
    return city.concat(population, area, density, country, normalizedDensity);
});

const outputData = (data, outputFn) => data.forEach(item => outputFn(item));

const processData = data => {
    if (!data) {
        return;
    }

    const countriesInfo = getCountriesInfo(data);
    const densities = getDensities(countriesInfo);
    const maxDensity = getMaxDensity(densities);
    const countriesWithNormalizedDensity = getCountriesWithNormalizedDensity(countriesInfo, maxDensity);
    const countriesSortedByNormalizedDensity = sortByNormalizedDensity(countriesWithNormalizedDensity);
    const formattedData = formatData(countriesSortedByNormalizedDensity);
    outputData(formattedData, console.log);
};

processData(data);

// Tests

test('Week 1: getCountriesInfo parse data correctly', () => {
    const testData = `city,population,area,density,country
      Shanghai,24256800,6340,3826,China
      Delhi,16787941,1484,11313,India
      Lagos,16060303,1171,13712,Nigeria`;

    const actual = getCountriesInfo(testData);
    const expectedLength = 3;
    const expectedFirstElement = ['Shanghai', '24256800', '6340', 3826, 'China'];
    const expectedThirdElement = ['Lagos', '16060303', '1171', 13712, 'Nigeria'];

    assert.strictEqual(Array.isArray(actual), true);
    assert.strictEqual(actual.length, expectedLength);
    assert.deepStrictEqual(actual[0], expectedFirstElement);
    assert.deepStrictEqual(actual[2], expectedThirdElement);
});

test('Week 1: getDensities generate array of densities correctly', () => {
    const testData = [
        ['Shanghai', '24256800', '6340', 3826, 'China'],
        ['Delhi', '16787941', '1484', 11313, 'India'],
        ['Lagos', '16060303', '1171', 13712, 'Nigeria']
    ];

    const actual = getDensities(testData);
    const expectedLength = 3;
    const expected = [3826, 11313, 13712];

    assert.strictEqual(Array.isArray(actual), true);
    assert.strictEqual(actual.length, expectedLength);
    assert.deepStrictEqual(actual, expected);
});

test('Week 1: getMaxDensity calculate max density correctly', () => {
    const testData = [3826, 13712, 11313];

    const actual = getMaxDensity(testData);
    const expected = 13712;

    assert.strictEqual(actual, expected);
});

test('Week 1: getCountriesWithNormalizedDensity append column with normalized density correctly', () => {
    const testData = [
        ['Shanghai', '24256800', '6340', 3826, 'China'],
        ['Lagos', '16060303', '1171', 13712, 'Nigeria']
    ];
    const maxDensity = 13712;

    const actual = getCountriesWithNormalizedDensity(testData, maxDensity);
    const expectedFirstElement = ['Shanghai', '24256800', '6340', 3826, 'China', 28];
    const expectedSecondElement = ['Lagos', '16060303', '1171', 13712, 'Nigeria', 100];

    assert.deepStrictEqual(actual[0], expectedFirstElement);
    assert.deepStrictEqual(actual[1], expectedSecondElement);
});

test('Week 1: sortByNormalizedDensity works correctly', () => {
    const testData = [
        ['Shanghai', '24256800', '6340', 3826, 'China', 28],
        ['Lagos', '16060303', '1171', 13712, 'Nigeria', 100]
    ];

    const actual = sortByNormalizedDensity(testData);
    const expectedFirstCountryDensity = 100;
    const expectedSecondCountryDensity = 28;

    assert.strictEqual(actual[0][5], expectedFirstCountryDensity);
    assert.strictEqual(actual[1][5], expectedSecondCountryDensity);
});

test('Week 1: formatData correctly prepare data for output', () => {
    const testData = [
        ['Shanghai', '24256800', '6340', 3826, 'China', 28],
    ];

    const actual = formatData(testData);
    const expected = 'Shanghai            24256800    6340    3826             China    28';

    assert.strictEqual(actual[0], expected);
});
