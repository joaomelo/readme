import type { PackageJson } from "type-fest";

import { describe, expect, it } from "vitest";

import { render } from "./render";

describe("render", () => {
  it("should render template with packageJson", () => {
    const packageJson: PackageJson = {
      description: "A test package",
      name: "test-package",
      version: "1.0.0",
    };

    const template = `# {{name}}
    Version: {{version}}
    Description: {{description}}`;

    const result = render(packageJson, template);
    
    expect(result).toEqual(`# test-package
    Version: 1.0.0
    Description: A test package`);
  });
});
