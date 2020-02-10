import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class RequestGet extends Command {
  public static description = "Get the request by passing a requestId";

  // tslint:disable-next-line: readonly-array
  public static args: Parser.args.IArg[] = [
    { name: "requestId", description: "the id of the request" }
  ];

  public async run(): Promise<void> {
    // can get args as an object
    const { args } = this.parse(RequestGet);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.requestId}`);
    // can also get the args as an array
    const { argv } = this.parse(RequestGet);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${argv[0]}`);
  }
}
