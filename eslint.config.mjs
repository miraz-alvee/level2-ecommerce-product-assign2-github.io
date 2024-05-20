
import eslint from '@eslint/js';
import globals from "globals";
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ["**/node_modules/", ".dist/"],
        languageOptions: {
            globals: {
                ...globals.node,
                process: "readonly",
            },
        },

        rules: {
            "no-unused-vars": "error",
            "prefer-const": "error",
            "no-console": "warn",
            "no-undef": "error",
        },
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
);