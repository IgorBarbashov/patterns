type CountryData = [string, string, string, number, string];

type CountryDataWithNormalizedValue = [string, string, string, number, string, number];

interface ParseCountryConfig {
    fieldDelimiter: string;
    parseToIntFieldIndexes: number[];
}

interface ParseCountriesConfig {
    rowDelimiter: string;
    fieldDelimiter: string;
    parseToIntFieldIndexes: number[];
}

interface GetMaxFieldValueConfig {
    fieldIndex: number;
}

interface GetCountriesWithNormalizedValuesConfig {
    normalizeByFieldIndex: number;
    normalizeToValue: number;
}

type PadFunction = 'padStart' | 'padEnd';

interface FormatDataConfig {
    padFn: PadFunction;
    padSize: number;
    convertFn: (arg: unknown) => string;
}

declare function parseCountryInfo (config: ParseCountryConfig, country: string): CountryData;

declare function parseCountriesInfo (data: string, config: ParseCountriesConfig): CountryData[];

declare function getMaxFiledValue (countries: CountryData[], config: GetMaxFieldValueConfig): number;

declare function getCountriesWithNormalizedValues (countries: CountryData[], config: GetCountriesWithNormalizedValuesConfig ): CountryDataWithNormalizedValue;

declare function formatData (data: string, config: FormatDataConfig): string[];

declare function processData (data: string): void;

export {
    parseCountryInfo,
    parseCountriesInfo,
    getMaxFiledValue,
    getCountriesWithNormalizedValues,
    formatData,
    processData
};
