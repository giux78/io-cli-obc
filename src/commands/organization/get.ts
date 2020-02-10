import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class OrganizationGet extends Command {
  public static description =
    "Get the organization info by passing an ipa code";

  // tslint:disable-next-line: readonly-array
  public static args: Parser.args.IArg[] = [
    { name: "ipaCode", description: "the ipa code of the organization" }
  ];

  public async run(): Promise<void> {
    // can get args as an object
    const { args } = this.parse(OrganizationGet);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.ipaCode}`);
    // can also get the args as an array
    const { argv } = this.parse(OrganizationGet);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${argv[0]}`);
  }
}
