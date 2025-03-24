import { useViewport } from "@/components/Viewport";
import { QueryItem } from "@workearly/api";
import { useEffect } from "react";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";

export const MIN_PAGE_LIMIT = 15;

type PropsType = {
  pages: QueryItem["Page"][];
};

export default function usePagination({ pages }: PropsType) {
  const isUntilMd = useViewport({ showUntil: "md" });

  const [pageLimit, setPageLimit] = useQueryParam(
    "pageLimit",
    withDefault(NumberParam, MIN_PAGE_LIMIT)
  );
  const [pageIndex, setPageIndex] = useQueryParam(
    "pageIndex",
    withDefault(NumberParam, 1)
  );

  useEffect(() => {
    if (isUntilMd) {
      setPageLimit(4);
      setPageIndex(1);
    } else {
      setPageLimit(MIN_PAGE_LIMIT);
      setPageIndex(1);
    }
  }, [isUntilMd, setPageIndex, setPageLimit]);

  const pageCount = Math.ceil(pages.length / pageLimit);

  function getCurrentPageItems() {
    const startIndex = (pageIndex - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;

    return pages.slice(startIndex, endIndex);
  }

  return {
    pageCount,
    pageIndex,
    pageLimit,
    setPageIndex,
    setPageLimit,
    getCurrentPageItems,
  };
}
