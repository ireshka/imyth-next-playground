module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true,
  //   'jest/globals': true,
  // },
  extends: [
    /**
     * @info General
     */
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    /**
     * @info React
     */
    "airbnb",
    "airbnb/hooks",
    /**
     * @info Typescript
     */
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    /**
     * @info Prettier
     */
    "prettier",
    /**
     * @info Next
     */
    "next",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    /**
     * @info General eslint plugins
     */
    "prettier",
    "promise",
    "unicorn",
    /**
     * @info Typescript
     */
    "@typescript-eslint",
  ],
  rules: {
    /**
     * @info eslint-plugin-import
     */
    "import/prefer-default-export": "off",
    /**
     * @info unicorn rules
     */
    "unicorn/filename-case": "off",
    "unicorn/import-index": "off",
    "unicorn/import-style": "off",
    "unicorn/no-null": "off",
    "unicorn/no-reduce": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-type-error": "off",
    "unicorn/prevent-abbreviations": [
      "off",
      // {
      //   checkFilenames: false,
      //   checkProperties: true,
      //   replacements: {
      //     props: {
      //       properties: false,
      //     },
      //     ref: {
      //       reference: false,
      //     },
      //     docs: false,
      //     doc: false,
      //   },
      // },
    ],
    /**
     * @info react rules
     */
    "react/no-danger": "off",
    /**
     * @info for React 17+
     */
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    /**
     * @info quick fixes
     */
    "no-console": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
    jest: {
      version: "detect",
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
};
