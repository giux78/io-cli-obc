import Command, { flags } from "@oclif/command";

export class ServiceCreate extends Command {
  public static description = "Create a service";

  public static flags = {
    logo: flags.string({
      description: "file path or url of the service logo",
      required: true
    }),
    "service.name": flags.string({
      description: "name of the service",
      required: true
    })
  };

  public async run(): Promise<void> {
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(ServiceCreate);
    if (flags["service.name"]) {
      // tslint:disable-next-line: no-console
      console.log("--service.name mandatory");
    }
  }
}
