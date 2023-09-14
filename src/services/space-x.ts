import { type Doc, type SpaceXAPIResponse } from "../types/api";

export const getLaunchById = async ({ id }: { id: string | undefined }) => {
  if (!id) return;

  const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const launch = (await response.json()) as Doc;

  return launch;
};

export const getLatestLaunches = async () => {
  const response = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const { docs: launches } = (await response.json()) as SpaceXAPIResponse;

  return launches;
};
