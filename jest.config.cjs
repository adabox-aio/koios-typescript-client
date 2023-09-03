module.exports = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    modulePathIgnorePatterns: [
        '<rootDir>/build/',
        '<rootDir>/node_modules/',
    ],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    roots: ['<rootDir>'],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '@app/(.*)': '<rootDir>/src/$1',
    },
    testTimeout: 300000
};