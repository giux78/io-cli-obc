import Command, { flags } from "@oclif/command";
import * as Parser from "@oclif/parser";
import * as chalk from "chalk";
import cli from "cli-ux";
import { IOEither, tryCatch as IOtryCatch } from "fp-ts/lib/IOEither";
import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither";
import * as fs from "fs";
import fetch from "node-fetch";
import { BASE_URL_ADMIN, OCP_APIM } from "../../commons/config";

export class ServiceLogo extends Command {
  public static description = "Update service data with base64 of the logo";

  // tslint:disable-next-line: readonly-array
  public static args: Parser.args.IArg[] = [
    {
      description: "id of the service",
      name: "serviceId",
      required: true
    }
  ];

  public static flags = {
    logo: flags.string({
      description: "Path of logo image to be converter into base64",
      required: true
    })
  };

  public async run(): Promise<void> {
    const { args } = this.parse(ServiceLogo);
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(ServiceLogo);
    // tslint:disable-next-line: no-console
    cli.action.start(
      chalk.blue.bold(`Updating logo to service with id: ${args.serviceId}`),
      chalk.blueBright.bold("Running"),
      {
        stdout: true
      }
    );

    this.logoToBase64(flags.logo)
      .mapLeft(err => cli.action.stop(chalk.red(`${err}`)))
      .map(base64 =>
        this.put(args.serviceId, base64)
          .fold(
            error => {
              cli.action.stop(chalk.red(`Error : ${error}`));
            },
            resp => {
              resp[0] === "green"
                ? cli.action.stop(chalk.green(`Response: ${resp[1]}`))
                : cli.action.stop(chalk.red(`Error ale: ${resp[1]}`));
            }
          )
          .run()
      )
      .run();
  }

  private put = (serviceId: string, base64Logo: string) => {
    return tryCatch(
      () =>
        fetch(`${BASE_URL_ADMIN}/services/${serviceId}/logo`, {
          body: JSON.stringify({ logo: base64Logo }),
          headers: {
            "Ocp-Apim-Subscription-Key": OCP_APIM
          },
          method: "put"
        }).then(resp =>
          resp
            .text()
            .then(result =>
              resp.status === 200 || resp.status === 201
                ? ["green", result]
                : ["red", result]
            )
        ),
      reason => new Error(String(reason))
    );
  };

  private logoToBase64 = (path: string): IOEither<Error, string> =>
    IOtryCatch(
      () => fs.readFileSync(path, { encoding: "base64" }),
      reason => new Error(String(reason))
    );
}
