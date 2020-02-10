import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class UserGet extends Command {
  public static description =
    "Get the user by email and return also the list of organization";

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
    const { args } = this.parse(UserGet);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.email}`);
  }
}
