module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
        'plugin:jest/all',
    ],
    plugins: ['react-hooks'],
    rules: {
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: ['**/*.test.tsx', '**/*.test.ts', 'src/setupTests.js', 'src/setupProxy.ts', 'src/testHelpers.tsx'],
        }],
        '@typescript-eslint/no-use-before-define': 0, // for clean code
        '@typescript-eslint/explicit-member-accessibility': 0, // too verbose for React components
        "@typescript-eslint/explicit-function-return-type": ['error', {
            allowTypedFunctionExpressions: true, // to infer types for functional React components
        }],
        'jest/no-hooks': 0, // too verbose in tests
        'jest/prefer-expect-assertions': 0, // only useful in error tests
        'react/state-in-constructor': [1, 'never'],
        'react/prop-types': 0, // TypeScript does it for us
    },
};