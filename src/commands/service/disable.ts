import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";

export class ServiceGet extends Command {
  public static description = "Disable a service";

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
    const { args } = this.parse(ServiceGet);
    // tslint:disable-next-line: no-console
    console.log(`running my command with args: ${args.serviceId}`);
  }
}
