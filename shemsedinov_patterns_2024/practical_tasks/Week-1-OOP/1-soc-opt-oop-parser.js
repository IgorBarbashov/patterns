'use strict';

class Parser {
    static #rowDelimiter = '\n';
    static #fieldDelimiter = ',';
    static #parseToIntFieldIndexes = [3];

    static #parseCountryData(country) {
        return country
            .split(Parser.#fieldDelimiter)
            .map((field, i) => Parser.#parseToIntFieldIndexes.includes(i)
                ? parseInt(field)
                : field.trim());
    }

    static parseCountriesData(data) {
        return data
            .split(Parser.#rowDelimiter)
            .slice(1)
            .map(Parser.#parseCountryData);
    };
}

module.exports = {
    Parser,
};
