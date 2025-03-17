export default function toPageSlugs(
  slug: string,
  variant?: string
): Array<Array<string>> {
  const paths: Array<Array<string>> = [];

  if (slug === "home") {
    return [[]];
  }

  if (variant === "Course") {
    paths.push([...slug.split("/"), "payment"]);
  }

  paths.push(slug.split("/"));

  return paths;
}
