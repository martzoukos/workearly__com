export default function getPageSlug(pageSlugs: string[] | undefined): string {
  return !pageSlugs ? "home" : (pageSlugs.join("/") as string);
}
