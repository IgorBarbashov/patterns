'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const {
    rowDelimiter,
    fieldDelimiter,
    parseToIntFieldIndexes,
    normalizeByFieldIndex,
    formatDataConfig,
} = require('./1-soc-opt-config.js');

const {
    parseCountryInfo,
    parseCountriesInfo,
    getMaxFieldValue,
    getCountriesWithNormalizedValues,
    formatData,
} = require('./1-soc-opt-solution-procedural.js');

test('Week 1: parseCountryInfo parse one country line correctly', () => {
    const testData = 'Shanghai,24256800,6340,3826,China';

    const actual = parseCountryInfo({ fieldDelimiter, parseToIntFieldIndexes }, testData);
    const expected = ['Shanghai', '24256800', '6340', 3826, 'China'];

    assert.strictEqual(Array.isArray(actual), true);
    assert.deepStrictEqual(actual, expected);
});

test('Week 1: parseCountriesInfo parse data correctly', () => {
    const testData = `city,population,area,density,country
      Shanghai,24256800,6340,3826,China
      Delhi,16787941,1484,11313,India
      Lagos,16060303,1171,13712,Nigeria`;

    const actual = parseCountriesInfo(testData, { rowDelimiter, fieldDelimiter, parseToIntFieldIndexes });
    const expectedLength = 3;
    const expectedFirstElement = ['Shanghai', '24256800', '6340', 3826, 'China'];
    const expectedThirdElement = ['Lagos', '16060303', '1171', 13712, 'Nigeria'];

    assert.strictEqual(Array.isArray(actual), true);
    assert.strictEqual(actual.length, expectedLength);
    assert.deepStrictEqual(actual[0], expectedFirstElement);
    assert.deepStrictEqual(actual[2], expectedThirdElement);
});

test('Week 1: getMaxFieldValue calculate max value of specified field correctly', () => {
    const testData = [
        ['Shanghai', '24256800', '6340', 3826, 'China'],
        ['Delhi', '16787941', '1484', 11313, 'India'],
        ['Lagos', '16060303', '1171', 13712, 'Nigeria'],
    ];

    const actual = getMaxFieldValue(testData, { normalizeByFieldIndex });
    const expected = 13712;

    assert.strictEqual(actual, expected);
});

test('Week 1: getCountriesWithNormalizedValues append column with normalized value correctly', () => {
    const testData = [
        ['Shanghai', '24256800', '6340', 3826, 'China'],
        ['Lagos', '16060303', '1171', 13712, 'Nigeria'],
    ];
    const normalizeToValue = 13712;

    const actual = getCountriesWithNormalizedValues(testData, { normalizeByFieldIndex, normalizeToValue });
    const expectedFirstElement = ['Shanghai', '24256800', '6340', 3826, 'China', 28];
    const expectedSecondElement = ['Lagos', '16060303', '1171', 13712, 'Nigeria', 100];

    assert.deepStrictEqual(actual[0], expectedFirstElement);
    assert.deepStrictEqual(actual[1], expectedSecondElement);
});

test('Week 1: formatData correctly prepare data for output', () => {
    const testData = [
        ['Shanghai', '24256800', '6340', 3826, 'China', 28],
    ];

    const actual = formatData(testData, { formatDataConfig });
    const expected = 'Shanghai            24256800    6340    3826             China    28';

    assert.strictEqual(actual[0], expected);
});
