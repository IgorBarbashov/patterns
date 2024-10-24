'use strict';

const { Parser } = require('./1-soc-opt-oop-parser');
const { Country, Countries } = require('./1-soc-opt-oop-country');
const { formatter } = require('./1-soc-opt-oop-formatter');
const {
    normalizeByFieldIndex,
    sortByFieldIndex,
} = require('../Week-1-Common/1-soc-opt-config');
const { data } = require('../Week-1-Common/1-soc-opt-data');

const processData = (data) => {
    if (!data) {
        return;
    }

    const countriesData = Parser.parseCountriesData(data);

    const countries =
        new Countries(countriesData.map((country) => new Country(country)));

    const countriesDataWithNormalizedValues =
        countries.getCountriesDataWithNormalizedValues(normalizeByFieldIndex);

    countriesDataWithNormalizedValues
        .sort((a, b) => b[sortByFieldIndex] - a[sortByFieldIndex]);

    const formattedData =
        formatter.formatData(countriesDataWithNormalizedValues);

    formattedData.forEach((item) => console.log(item));
};

processData(data);
