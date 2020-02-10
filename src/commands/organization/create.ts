import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class OrganizationCreate extends Command {
  public static description = "Create an organization";

  public static flags = {
    "legal.email": flags.string({
      description: "email of the legal rapresentative",
      required: true
    }),
    logo: flags.string({
      description: "file path or url of the logo",
      required: true
    }),
    "manager.email": flags.string({
      description: "email of the manager",
      required: true
    }),
    "org.id": flags.string({
      description: "id of the organization",
      required: true
    }),
    "org.pec": flags.string({
      description: "organization pec",
      required: false
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
    const { args } = this.parse(OrganizationCreate);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.requestId}`);
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(OrganizationCreate);
    if (flags["legal.email"]) {
      // tslint:disable-next-line: no-console
      console.log("--legal.email mandatory");
    }
  }
}
