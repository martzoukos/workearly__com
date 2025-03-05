import { QueryItem } from "@workearly/api";

const DATA_MAP = {
  labels: {
    Mentor: "Mentors",
    Certificate: "Certificates",
    Partner: "Partners",
  },
  links: {
    Mentor: "/mentors",
    Certificate: "/certificates",
    Partner: "/partners",
  },
} as const;

type VariantType = keyof typeof DATA_MAP.labels;

export default function usePeopleDetailsResolver(
  peopleDetails: QueryItem["PeopleDetails"]
) {
  const variant = (peopleDetails.variant ?? "Mentor") as VariantType;
  const indexLabel = DATA_MAP.labels[variant] ?? DATA_MAP.labels.Mentor;
  const indexLink = DATA_MAP.links[variant] ?? DATA_MAP.links.Mentor;
  const entityLabel = `Workearly ${variant}`;

  return {
    peopleDetails,
    indexLabel,
    indexLink,
    entityLabel,
  };
}
