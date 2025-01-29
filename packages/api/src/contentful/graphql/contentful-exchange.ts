import { Exchange } from "@urql/core";
import { pipe, tap } from "wonka";
import { ContentfulExchangeOptionsType } from "../../types";

export default function contentfulExchange({
  isPreview,
}: ContentfulExchangeOptionsType): Exchange {
  return ({ forward }) =>
    (ops$) => {
      return pipe(
        ops$,
        tap((operation) => {
          if (isPreview) {
            const existingVariables = operation.variables || {};
            operation.variables = {
              ...existingVariables,
              preview: true,
            };
          }
        }),
        forward
      );
    };
}
