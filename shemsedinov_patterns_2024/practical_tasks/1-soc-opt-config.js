const rowDelimiter = '\n';

const fieldDelimiter = ',';

const parseToIntFieldIndexes = [3];

const normalizeByFieldIndex = 3;

const sortByFieldIndex = 5;

const formatDataConfig = [
    { padFn: 'padEnd', padSize: 18 },
    { padFn: 'padStart', padSize: 10 },
    { padFn: 'padStart', padSize: 8 },
    { padFn: 'padStart', padSize: 8, convertFn: String },
    { padFn: 'padStart', padSize: 18 },
    { padFn: 'padStart', padSize: 6, convertFn: String }
];

module.exports = {
    rowDelimiter,
    fieldDelimiter,
    parseToIntFieldIndexes,
    normalizeByFieldIndex,
    sortByFieldIndex,
    formatDataConfig
};
