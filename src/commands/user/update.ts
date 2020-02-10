import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class UserUpdate extends Command {
  public static description = "Update a user";

  public static flags = {
    name: flags.string({
      description: "name of the user",
      required: true
    })
  };

  // tslint:disable-next-line: readonly-array
  public static args: Parser.args.IArg[] = [
    {
      description: "email of the user",
      name: "email",
      required: true
    }
  ];

  public async run(): Promise<void> {
    // can get args as an object
    const { args } = this.parse(UserUpdate);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.email}`);
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(UserUpdate);
    if (flags.name) {
      // tslint:disable-next-line: no-console
      console.log("- mandatory");
    }
  }
}
