import { expect, test } from "@oclif/test";

describe("service:get", () => {
  test
    .stdout()
    .command(["service:get", "test"])
    .it("runs service:get", ctx => {
      expect(ctx.stdout).to.contain('"status":404');
    });
});
