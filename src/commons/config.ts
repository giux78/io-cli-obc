import { getRequiredEnvVar } from "./environments";

export const BASE_URL_ADMIN = getRequiredEnvVar("BASE_URL_ADMIN");
export const OCP_APIM = getRequiredEnvVar("OCP_APIM");
