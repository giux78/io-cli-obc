import Command, { flags } from "@oclif/command";

export class RequestList extends Command {
  public static description =
    "Get list of requests, you can filter optionally by org and user flags";

  public static flags = {
    // can pass either --force or -f
    org: flags.string({
      char: "o",
      description: "ipaCode of the organization", // help description for flag
      required: false
    }),
    user: flags.string({
      char: "u",
      description: "email of the user", // help description for flag
      required: false
    })
  };

  public async run(): Promise<void> {
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(RequestList);
    if (flags.org) {
      // tslint:disable-next-line: no-console
      console.log("--org is set");
    }
    if (flags.user) {
      // tslint:disable-next-line: no-console
      console.log(`--user is: ${flags.user}`);
    }
  }
}
