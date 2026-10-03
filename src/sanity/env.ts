import { CREDENTIALS } from "@/lib/constants";

const assertValue = <T>(value: T | undefined, errorMessage: string): T => {
  if (value === undefined) throw new Error(errorMessage);
  return value;
};

export const apiVersion = CREDENTIALS.sanity_api_version || "2025-01-01";

export const dataset = assertValue(
  CREDENTIALS.sanity_dataset,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  CREDENTIALS.sanity_project_id,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);
