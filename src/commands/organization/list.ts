import Command, { flags } from "@oclif/command";

export class OrganizationList extends Command {
  public static description = "Get list of organizations";

  public async run(): Promise<void> {
    // tslint:disable-next-line: no-console
    console.log("call organization list");
  }
}
