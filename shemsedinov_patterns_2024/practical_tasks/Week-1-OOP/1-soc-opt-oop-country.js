'use strict';

class Country {
    #data = null;

    constructor(data) {
        this.#data = data;
    }

    get getData() {
        return this.#data;
    }

    getValueByIndex(index) {
        return this.#data[index];
    }

    getNormalizedValue(index, valueNormalizeTo) {
        return Math.round(this.#data[index] * 100 / valueNormalizeTo);
    }
}

class Countries {
    #countries = null;

    constructor(countries) {
        this.#countries = countries;
    }

    #getMaxFieldValue(fieldIndex) {
        return this.#countries.reduce((acc, country) =>
            Math.max(acc, country.getValueByIndex(fieldIndex)), 0);
    }

    getCountriesDataWithNormalizedValues(fieldIndex) {
        const maxFieldValue = this.#getMaxFieldValue(fieldIndex);
        return this.#countries.map((country) =>
            [
                ...country.getData,
                country.getNormalizedValue(fieldIndex, maxFieldValue),
            ],
        );
    }
}

module.exports = {
    Country,
    Countries,
};
