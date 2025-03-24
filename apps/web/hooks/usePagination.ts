import { useViewport } from "@/components/Viewport";
import { QueryItem } from "@workearly/api";
import { useEffect } from "react";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";

export const MIN_PAGE_LIMIT = 15;

export default function usePagination() {
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

  function getCurrentPageItems(filteredPages: QueryItem["Page"][]) {
    const startIndex = (pageIndex - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;

    return filteredPages.slice(startIndex, endIndex);
  }

  return {
    pageIndex,
    pageLimit,
    setPageIndex,
    setPageLimit,
    getCurrentPageItems,
  };
}
