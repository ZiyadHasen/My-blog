import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve the current file and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for ESLint compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname, // Use the directory of this file
});

// Define the ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// Export the configuration as the default export
export default eslintConfig;
