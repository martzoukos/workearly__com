import { Exchange, makeOperation } from "@urql/core";
import { DocumentNode, Kind, visit } from "graphql";
import { map, pipe } from "wonka";

export type PlaygroundExchangeProps = {
  isEnabled?: boolean;
};

export default function playgroundExchange({
  isEnabled,
}: PlaygroundExchangeProps): Exchange {
  return ({ forward }) =>
    (ops$) => {
      return pipe(
        ops$,
        map((operation) => {
          if (!isEnabled || operation.kind !== "query") {
            return operation;
          }

          const modifiedQuery = visit(operation.query as DocumentNode, {
            SelectionSet(node, _, parent) {
              if (
                parent &&
                typeof parent === "object" &&
                "kind" in parent &&
                parent.kind === Kind.FIELD &&
                parent.name.value === "sys" &&
                !node.selections.some(
                  (s) => s.kind === Kind.FIELD && s.name.value === "spaceId"
                )
              ) {
                return {
                  ...node,
                  selections: [
                    ...node.selections,
                    {
                      kind: Kind.FIELD,
                      name: { kind: Kind.NAME, value: "spaceId" },
                    },
                  ],
                };
              }
            },
          });

          return makeOperation(
            operation.kind,
            { ...operation, query: modifiedQuery },
            operation.context
          );
        }),
        forward
      );
    };
}
