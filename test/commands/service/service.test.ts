import { expect, test } from "@oclif/test";
import { getRequiredEnvVar } from "../../../src/commons/environments";

describe("service", () => {
  // const baseUrlAdmin = getRequiredEnvVar("BASE_URL_ADMIN");
  const randomString = Math.random()
    .toString(36)
    .substring(2);

  const serviceMock = {
    authorized_cidrs: [],
    authorized_recipients: [],
    department_name: "department_test",
    organization_fiscal_code: "123456711111",
    organization_name: "organization_name",
    service_id: randomString,
    service_name: randomString
  };

  const serviceResponseMock = {
    authorized_cidrs: [],
    authorized_recipients: [],
    department_name: "department_test",
    id: `${randomString}-0000000000000000`,
    is_visible: false,
    max_allowed_payment_amount: 0,
    organization_fiscal_code: "12345670000",
    organization_name: "organization_name",
    require_secure_channels: false,
    service_id: randomString,
    service_name: randomString,
    version: 0
  };

  test
    .stdout()
    .nock("https://api.dev.io.italia.it/adm", api =>
      api.post("/services", serviceMock).reply(200, serviceResponseMock)
    )
    .command([
      "service:create",
      "--department_name=department_test",
      "--organization_fiscal_code=12345670000",
      "--organization_name=organization_name",
      `--service_id=${randomString}`,
      `--service_name=${randomString}`
    ])
    .it("runs service:create", ctx => {
      console.log("post");
      console.log(ctx.stdout);
      expect(ctx.stdout).to.contain("123456711111");
    });

  test
    .stdout()
    .nock("https://api.dev.io.italia.it/adm/services", api =>
      api.get(`/test`).reply(200, serviceMock)
    )
    .command(["service:get", "test"])
    .it("get service info", ctx => {
      expect(ctx.stdout).to.contain("123456711111");
    });

  /*  
  test
    .stdout()
    .nock(baseUrlAdmin, api =>
      api
        .put(`/services/${serviceMock.service_id}`, {
          ...serviceMock,
          service_name: "test2"
        })
        .reply(200, serviceMock)
    )
    .command([
      "service:create",
      "--department_name=department_test",
      "--organization_fiscal_code=12345670000",
      "--organization_name=organization_name",
      `--service_id=test`,
      `--service_name=test2`
    ])
    .it("get service info", ctx => {
      expect(ctx.stdout).to.contain("test2");
    }); */
});
