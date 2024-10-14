import type { PackageJson } from "type-fest";

import fs from "fs";
import { resolve } from "path";

import { defaultTemplate } from "./default";
import { render } from "./render";

export function main() {
  const userPackageJsonPath = resolve(process.cwd(), "package.json");
  if (!fs.existsSync(userPackageJsonPath)) throw new Error(`package.json was not fount at ${userPackageJsonPath}`);
  const packageJsonText = fs.readFileSync(userPackageJsonPath, "utf-8");
  const packageJsonData: PackageJson = JSON.parse(packageJsonText);

  const userTemplatePath = resolve(process.cwd(), "README.mustache");
  const template = fs.existsSync(userTemplatePath) ? fs.readFileSync(userTemplatePath, "utf-8") : defaultTemplate();

  const readmePath = resolve(process.cwd(), "README.md");
  const readme = render(packageJsonData, template);
  
  fs.writeFileSync(readmePath, readme, "utf-8");
}