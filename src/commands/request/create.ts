import Command, { flags } from "@oclif/command";

export class RequestCreate extends Command {
  public static description =
    "Create a request for membership agreement or request delegation";

  public static flags = {
    file: flags.string({
      description: "file path of a pdf file", // help description for flag
      required: true
    }),
    "legal.email": flags.string({
      description: "email of the legal rapresentative",
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

  public async run(): Promise<void> {
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(RequestCreate);
    if (flags["legal.email"]) {
      // tslint:disable-next-line: no-console
      console.log("--legal.email mandatory");
    }
  }
}
