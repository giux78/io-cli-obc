import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class OrganizationUnlink extends Command {
  public static description = "Unlink an account to an organization";

  public static flags = {
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
    const { args } = this.parse(OrganizationUnlink);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.ipaCode}`);
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(OrganizationUnlink);
    if (flags.user) {
      // tslint:disable-next-line: no-console
      console.log("--user mandatory");
    }
  }
}
