export default function getPageSlug(pageSlugs: string[] | undefined): string {
  let slug = "home";

  if (!pageSlugs) {
    return slug;
  }

  if (pageSlugs?.at(-1) === "payment") {
    return pageSlugs.slice(0, -1).join("/");
  }

  return pageSlugs.join("/");
}
