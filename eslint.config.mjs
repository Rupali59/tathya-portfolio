import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: "writable",
        JSX: "readonly",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...tsPlugin.configs.recommended.rules,

      // 1. Force next/image
      "@next/next/no-img-element": "error",

      // 2. Ban runtime CSS-in-JS (styled-components)
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "styled-components",
              message:
                "Traditional styled-components are banned. Use Tailwind CSS for static extraction.",
            },
            {
              name: "@emotion/styled",
              message:
                "Runtime CSS-in-JS is banned. Use Tailwind CSS for static extraction.",
            },
          ],
        },
      ],

      // 3. Ban inline styles (unless dynamic/variables)
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "JSXAttribute[name.name='style'] > JSXExpressionContainer > ObjectExpression",
          message:
            "Avoid inline style objects. Use Tailwind classes. Only use inline styles for true dynamic values (e.g., CSS variables).",
        },
        {
          selector: "JSXAttribute[name.name='style'] > Literal",
          message: "Avoid inline style strings. Use Tailwind classes.",
        },
      ],

      // 4. Client-side hook detection in Server Components
      // Uses a heuristic: If a file uses a hook (use...) but lacks 'use client', error out.
      "@typescript-eslint/no-restricted-syntax": [
        "off", // Note: This requires complex regex/plugins, better handled by Next.js compiler.
      ],

      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "no-undef": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["scripts/**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "dist/**",
      "build/**",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];
