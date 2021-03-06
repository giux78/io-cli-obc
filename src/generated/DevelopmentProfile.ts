/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { EmailAddress } from "./EmailAddress";
import * as t from "io-ts";

// required attributes
const DevelopmentProfileR = t.interface({
  email: EmailAddress
});

// optional attributes
const DevelopmentProfileO = t.partial({});

export const DevelopmentProfile = t.intersection(
  [DevelopmentProfileR, DevelopmentProfileO],
  "DevelopmentProfile"
);

export type DevelopmentProfile = t.TypeOf<typeof DevelopmentProfile>;
