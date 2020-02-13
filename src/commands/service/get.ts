import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";
import * as chalk from "chalk";
import cli from "cli-ux";
import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither";
import fetch from "node-fetch";
import { BASE_URL_ADMIN, OCP_APIM } from "../../commons/config";

export class ServiceGet extends Command {
  public static description = "Get the service by serviceId";

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
    cli.action.start(
      chalk.blue.bold(`Getting info for service ${args.serviceId}`),
      chalk.blueBright.bold("Running"),
      {
        stdout: true
      }
    );
    return this.get(args.serviceId)
      .fold(
        error => {
          cli.action.stop(chalk.red(`Error : ${error}`));
        },
        result => {
          cli.action.stop(chalk.green(`Response: ${result}`));
        }
      )
      .run();
  }

  private get = (serviceId: string): TaskEither<Error, string> => {
    return tryCatch(
      () =>
        fetch(`${BASE_URL_ADMIN}/services/${serviceId}`, {
          headers: {
            "Ocp-Apim-Subscription-Key": OCP_APIM
          }
        }).then(res => res.text()),
      reason => new Error(String(reason))
    );
  };
}
