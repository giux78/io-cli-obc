import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class OrganizationLink extends Command {
  public static description = "Link an account to an organization";

  public static flags = {
    role: flags.string({
      description: "role of the user",
      options: ["legal", "manager", "developer"],
      required: true
    }),
    user: flags.string({
      description: "email of the user",
      required: true
    })
  };

  // tslint:disable-next-line: readonly-array
  public static args: Parser.args.IArg[] = [
    {
      description: "ipa code for the organization",
      name: "ipaCode",
      required: true
    }
  ];

  public async run(): Promise<void> {
    // can get args as an object
    const { args } = this.parse(OrganizationLink);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.ipaCode}`);
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(OrganizationLink);
    if (flags.user) {
      // tslint:disable-next-line: no-console
      console.log("--user mandatory");
    }
  }
}
