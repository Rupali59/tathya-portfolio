import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      ".next/**/*",
      "node_modules/**/*",
      "out/**/*",
      "build/**/*",
      "dist/**/*",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
  {
    rules: {
      // Disable TypeScript rules that cause too many warnings
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Disable React rules that cause warnings
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off",

      // Disable Next.js rules that cause warnings
      "@next/next/no-img-element": "off",

      // Disable general rules that cause warnings
      "prefer-rest-params": "off",
    },
  },
];

export default eslintConfig;
