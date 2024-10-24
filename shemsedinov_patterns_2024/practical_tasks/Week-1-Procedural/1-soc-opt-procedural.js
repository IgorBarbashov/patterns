'use strict';

const {
    rowDelimiter,
    fieldDelimiter,
    parseToIntFieldIndexes,
    normalizeByFieldIndex,
    sortByFieldIndex,
    formatDataConfig,
} = require('../Week-1-Common/1-soc-opt-config.js');

const { data } = require('../Week-1-Common/1-soc-opt-data.js');

const parseCountryInfo = ({ fieldDelimiter, parseToIntFieldIndexes }, country) => country
    .split(fieldDelimiter)
    .map((field, i) => parseToIntFieldIndexes.includes(i) ? parseInt(field) : field.trim());

const parseCountriesInfo = (data, { rowDelimiter, fieldDelimiter, parseToIntFieldIndexes }) => {
    const countryInfoParser = parseCountryInfo.bind(null, { fieldDelimiter, parseToIntFieldIndexes });
    return data.split(rowDelimiter).slice(1).map(countryInfoParser);
};

const getMaxFieldValue = (countries, { fieldIndex }) =>
    countries.reduce((acc, country) => Math.max(acc, country[fieldIndex]), 0);

const getCountriesWithNormalizedValues = (countries, { normalizeByFieldIndex, normalizeToValue }) =>
    countries.map((country) => {
        const normalizedValue = Math.round(country[normalizeByFieldIndex] * 100 / normalizeToValue);
        return [...country, normalizedValue];
    });

const formatData = (data, { formatDataConfig }) => data.map((row) =>
    row.map((cell, i) => {
        const { padFn, padSize, convertFn } = formatDataConfig[i];
        return (convertFn?.(cell) ?? cell)[padFn](padSize);
    }).join(''));

const processData = (data) => {
    if (!data) {
        return;
    }

    const countriesInfo = parseCountriesInfo(data, { rowDelimiter, fieldDelimiter, parseToIntFieldIndexes });
    const normalizeToValue = getMaxFieldValue(countriesInfo, { fieldIndex: normalizeByFieldIndex });
    const countriesWithNormalizedValues = getCountriesWithNormalizedValues(countriesInfo, { normalizeByFieldIndex, normalizeToValue });
    countriesWithNormalizedValues.sort((a, b) => b[sortByFieldIndex] - a[sortByFieldIndex]);
    const formattedData = formatData(countriesWithNormalizedValues, { formatDataConfig });
    formattedData.forEach((item) => console.log(item));
};

processData(data);

module.exports = {
    parseCountryInfo,
    parseCountriesInfo,
    getMaxFieldValue,
    getCountriesWithNormalizedValues,
    formatData,
};
