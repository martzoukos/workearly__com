import { QueryItem } from "@workearly/api";

type PropsType = {
  card: QueryItem["Card"];
  className?: string;
};

export default function TestimonialCard({ card }: PropsType) {
  return <div>{card.sys.id}</div>;
}
