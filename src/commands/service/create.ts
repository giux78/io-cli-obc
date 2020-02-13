import Command, { flags } from "@oclif/command";
import * as chalk from "chalk";
import cli from "cli-ux";
import { Either } from "fp-ts/lib/Either";
import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither";
import { Errors } from "io-ts";
import { errorsToReadableMessages } from "italia-ts-commons/lib/reporters";
import fetch from "node-fetch";
import { getRequiredEnvVar } from "../../commons/environments";
import { Service } from "../../generated/Service";

export class ServiceCreate extends Command {
  public static description = "Create a service";

  public static flags = {
    authorized_cidrs: flags.string({
      default: "",
      description:
        "Allowed source IPs or CIDRs for this service. String separated by , of single IP or a range of IPs and can be empty",
      required: true
    }),
    authorized_recipients: flags.string({
      default: "",
      description:
        "If non empty, the service will be able to send messages only to these fiscal codes. Fiscal code format",
      required: true
    }),
    department_name: flags.string({
      description: "Name of the department of the organization",
      required: true
    }),
    logo: flags.string({
      description: "File path or url of the service logo",
      required: false
    }),
    organization_fiscal_code: flags.string({
      description: "Name of the organization",
      required: true
    }),
    organization_name: flags.string({
      description: "Name of the organization",
      required: true
    }),
    service_id: flags.string({
      description: "Id of the service",
      required: true
    }),
    service_name: flags.string({
      description: "Name of the service",
      required: true
    })
  };

  public async run(): Promise<void> {
    // tslint:disable-next-line: no-shadowed-variable
    const { flags } = this.parse(ServiceCreate);
    const servicePayload = {
      authorized_cidrs:
        flags.authorized_cidrs === "" ? [] : flags.authorized_cidrs.split(","),
      authorized_recipients:
        flags.authorized_recipients === ""
          ? []
          : flags.authorized_recipients.split(","),
      department_name: flags.department_name,
      organization_fiscal_code: flags.organization_fiscal_code,
      organization_name: flags.organization_name,
      service_id: flags.service_id,
      service_name: flags.service_name
    };

    cli.action.start(
      chalk.blue.bold(`Creating a service`),
      chalk.blueBright.bold("Running"),
      {
        stdout: true
      }
    );
    const errorOrService: Either<Errors, Service> = Service.decode(
      servicePayload
    );

    // may be can be a better way without nesting
    // suggestions?
    errorOrService.fold(
      error =>
        cli.action.stop(
          chalk.red(`Error : ${errorsToReadableMessages(error)}`)
        ),
      service =>
        this.post(service)
          .fold(
            error => {
              cli.action.stop(chalk.red(`Error : ${error}`));
            },
            result => {
              cli.action.stop(chalk.green(`Response: ${result}`));
            }
          )
          .run()
    );
  }

  private post = (service: Service): TaskEither<Error, string> => {
    return tryCatch(
      () =>
        fetch(`${getRequiredEnvVar("BASE_URL_ADMIN")}/services`, {
          body: JSON.stringify(service),
          headers: {
            "Ocp-Apim-Subscription-Key": getRequiredEnvVar("OCP_APIM")
          },
          method: "post"
        }).then(res => res.text()),
      reason => new Error(String(reason))
    );
  };
}
