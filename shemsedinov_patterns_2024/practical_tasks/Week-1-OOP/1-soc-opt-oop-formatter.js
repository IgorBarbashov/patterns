'use strict';

class FieldFormatConfig {
    #padFn = null;
    #padSize = undefined;
    #convertFn = null;

    constructor(padFn, padSize, convertFn = null) {
        this.#padFn = padFn;
        this.#padSize = padSize;
        this.#convertFn = convertFn;
    }

    getConfig() {
        return {
            padFn: this.#padFn,
            padSize: this.#padSize,
            convertFn: this.#convertFn,
        };
    }
}

class Formatter {
    #formatDataConfig = null;

    constructor(formatDataConfig) {
        this.#formatDataConfig = formatDataConfig;
    }

    formatData(data) {
        return data.map((row) => row.map((cell, i) => {
            const { padFn, padSize, convertFn } = this.#formatDataConfig[i].getConfig();
            return (convertFn?.(cell) ?? cell)[padFn](padSize);
        }).join(''));
    }
}

const formatDataConfig = [
    new FieldFormatConfig('padEnd', 18),
    new FieldFormatConfig('padStart', 10),
    new FieldFormatConfig('padStart', 8),
    new FieldFormatConfig('padStart', 8, String),
    new FieldFormatConfig('padStart', 18),
    new FieldFormatConfig('padStart', 6, String),
];

const formatter = new Formatter(formatDataConfig);

module.exports = {
    formatter,
};
