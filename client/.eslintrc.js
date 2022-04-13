module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "globals": {
        "React": true,
        "JSX": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": 0,
        "react/jsx-filename-extension": [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "no-undef": "off"
            }
        }
    ]
}
