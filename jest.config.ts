/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    clearMocks: true,
    moduleFileExtensions: [
      'js',
      'jsx',
      'ts',
      'tsx'
    ],
    roots: [
      '<rootDir>/src'
    ],
    testEnvironment: 'node',
    preset: 'ts-jest'
}