import Button from "@/components/Button";
import Select from "@/components/Select";
import Viewport from "@/components/Viewport";
import usePagination, { MIN_PAGE_LIMIT } from "@/hooks/usePagination";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import styles from "./Pagination.module.scss";

type PropsType = {
  pages: QueryItem["Page"][];
} & ReturnType<typeof usePagination>;

export default function Pagination({
  pages,
  pageIndex,
  pageLimit,
  setPageIndex,
  setPageLimit,
}: PropsType) {
  const pageCount = Math.ceil(pages.length / pageLimit);

  return (
    <>
      <Viewport showUntil="md">
        <footer className={styles.footer}>
          {pageIndex !== pageCount && (
            <Button
              isFullWidth
              variant="Outlined"
              onClick={() => setPageLimit(pageLimit + 4)}
            >
              Load More
            </Button>
          )}
        </footer>
      </Viewport>
      <Viewport showAfter="md">
        <footer className={styles.footer}>
          <label className={styles.pageCount}>
            Results per view
            <Select
              value={pageLimit.toString()}
              onValueChange={(count) => setPageLimit(Number(count))}
            >
              {Array.from({ length: 3 }, (_, i) => i).map((count) => (
                <Select.Item
                  key={count}
                  value={(count * 15 + MIN_PAGE_LIMIT).toString()}
                >
                  {count * 15 + MIN_PAGE_LIMIT}
                </Select.Item>
              ))}
            </Select>
          </label>
          <div className={styles.pagination}>
            <Button
              variant="Outlined"
              onClick={() => setPageIndex(pageIndex - 1)}
              disabled={pageIndex === 1}
            >
              <ChevronLeft />
            </Button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((index) => (
              <Button
                key={index}
                variant="Solid"
                onClick={() => setPageIndex(index)}
                colorSchemes={{
                  light: index === pageIndex ? "Green" : "Surface",
                  dark: index === pageIndex ? "Green" : "Surface",
                }}
              >
                {index}
              </Button>
            ))}
            <Button
              variant="Outlined"
              onClick={() => setPageIndex(pageIndex + 1)}
              disabled={pageIndex === pageCount}
            >
              <ChevronRight />
            </Button>
          </div>
        </footer>
      </Viewport>
    </>
  );
}
