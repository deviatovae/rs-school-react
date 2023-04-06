module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        "react/prefer-stateless-function": 0,
        "react/no-unescaped-entities": 0,
        "import/prefer-default-export": "off",
        "react/require-default-props" : "off",
        "react/state-in-constructor": [0],
        "jsx-a11y/label-has-associated-control": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
        "jsx-a11y/label-has-for": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "react/jsx-props-no-spreading": "off",
        "react/display-name": "off"
    },
}
