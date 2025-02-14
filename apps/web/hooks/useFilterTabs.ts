import {
  DelimitedArrayParam,
  useQueryParam,
  withDefault,
} from "use-query-params";

type OptionsType = {
  allKey?: string;
};

export default function useFilterTabs(key: string, options?: OptionsType) {
  const allKey = options?.allKey || "all";
  const [selected, setSelected] = useQueryParam(
    key,
    withDefault(DelimitedArrayParam, [allKey] as string[])
  );

  function onSelect(filter: string) {
    if (filter === allKey) {
      return [allKey];
    }

    let newFilters = selected.filter((f) => f !== allKey);

    if (newFilters.includes(filter)) {
      newFilters = newFilters.filter((f) => f !== filter);
    } else {
      newFilters.push(filter);
    }

    if (newFilters.length === 0) {
      newFilters = [allKey];
    }

    return newFilters;
  }

  return { selected, setSelected, onSelect };
}
