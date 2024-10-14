import type { PackageJson } from "type-fest";

import Mustache from "mustache";

export function render(packageJson: PackageJson, template: string): string {
  const readme = Mustache.render(template, packageJson); 
  if (typeof readme !== "string") throw new Error("unable to render readme file content");
  return readme;
}