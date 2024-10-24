type CountryData = [string, string, string, number, string];

type CountryDataWithNormalizedValue = [string, string, string, number, string, number];

declare class Country {
    private data: CountryData | null;

    constructor(data: CountryData);
    getData(): CountryData;
    getValueByIndex(index: number): number;
    getNormalizedValue(index: number, valueNormalizeTo: number): number;
}

declare class Countries {
    private countries: Country[] | null;

    constructor(countries: Country[]);
    private getMaxFieldValue(fieldIndex: number): number;
    getCountriesDataWithNormalizedValues(fieldIndex: number): CountryDataWithNormalizedValue[];
}

interface FormatConfig {
    padFn: string;
    padSize: number;
    convertFn?: (value: unknown) => string;
}

declare class FieldFormatConfig {
    private padFn: string | null;
    private padSize: number | undefined;
    private convertFn?: ((value: unknown) => string) | null;

    constructor(padFn: string, padSize: number, convertFn: (value: unknown) => string);
    getConfig(): FormatConfig;
}

declare class Formatter {
    private formatDataConfig: FormatConfig | null;

    constructor(formatDataConfig: FormatConfig[]);
    formatData(data: string): CountryData[];
}

declare const formatDataConfig: FieldFormatConfig[];

declare const formatter: Formatter;

declare class Parser {
    private static rowDelimiter: string;
    private static fieldDelimiter: string;
    private static parseToIntFieldIndexes:  number[];

    private static parseCountryData(country: string): CountryData;
    static parseCountriesData(data: string): CountryData[];
}

export {
    CountryData,
    CountryDataWithNormalizedValue,
    Country,
    Countries,
    FormatConfig,
    FieldFormatConfig,
    Formatter,
    formatDataConfig,
    formatter,
    Parser,
}
