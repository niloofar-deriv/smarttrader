export default {
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
    coverageReporters: ['html', 'lcov', 'json'],
    coverageDirectory: './coverage',
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^Api/(.*)$': '<rootDir>/src/api/$1',
        '^Components/(.*)$': '<rootDir>/src/components/$1',
        '^Constants/(.*)$': '<rootDir>/src/constants/$1',
        '^Contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '^Styles/(.*)$': '<rootDir>/src/styles/$1',
        '^Translations$': '<rootDir>/src/translations/$1',
        '^Types/(.*)$': '<rootDir>/src/types/$1',
        '^Utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
};
