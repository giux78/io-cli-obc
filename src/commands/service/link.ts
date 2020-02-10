import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class ServiceLink extends Command {
  public static description = "Link a service to an organization";

  public static flags = {
    org: flags.string({
      description: "ipa code of the organization",
      required: true
    })
  };

  // tslint:disable-next-line: readonly-array
  public static args: Parser.args.IArg[] = [
    {
      description: "id of the service",
      name: "serviceId",
      required: true
    }
  ];

  public async run(): Promise<void> {
    // can get args as an object
    const { args } = this.parse(ServiceLink);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.serviceId}`);
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(ServiceLink);
    if (flags.org) {
      // tslint:disable-next-line: no-console
      console.log("--user mandatory");
    }
  }
}
