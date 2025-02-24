import { Exchange } from "@urql/core";
import { pipe, tap } from "wonka";

export type ContentfulExchangeProps = {
  isPreview?: boolean;
};

export default function contentfulExchange({
  isPreview,
}: ContentfulExchangeProps): Exchange {
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
