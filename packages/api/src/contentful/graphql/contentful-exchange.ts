import { Exchange } from "@urql/core";
import { pipe, tap } from "wonka";

// TODO: Move this to /types
export type ContentfulExchangePropsType = {
  isPreview?: boolean;
};

const contentfulExchange = ({
  isPreview,
}: ContentfulExchangePropsType): Exchange => {
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
};

export default contentfulExchange;
