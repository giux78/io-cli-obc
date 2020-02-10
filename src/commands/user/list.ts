import Command, { flags } from "@oclif/command";

export class UserList extends Command {
  public static description = "Get list of users";

  public async run(): Promise<void> {
    // tslint:disable-next-line: no-console
    console.log("call user list");
  }
}
