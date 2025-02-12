import useRichTextResolver, {
  RichTextVariantType,
} from "@/hooks/useRichTextResolver";
import { useRemarkSync } from "react-remark";
import { TextProps } from "../Text/Text";
import { H1, H2, H3, H4, H5, H6, LI, P, UL } from "./RichTextPrimitives";
import { PropsWithChildren } from "react";

type PropsType = {
  children: string;
  variant?: RichTextVariantType;
};

export default function Markdown({ children, variant }: PropsType) {
  const resolver = useRichTextResolver(variant);

  const markdown = useRemarkSync(children, {
    remarkPlugins: [],
    rehypeReactOptions: {
      components: {
        h1: (props: TextProps) => <H1 resolver={resolver} {...props} />,
        h2: (props: TextProps) => <H2 resolver={resolver} {...props} />,
        h3: (props: TextProps) => <H3 resolver={resolver} {...props} />,
        h4: (props: TextProps) => <H4 resolver={resolver} {...props} />,
        h5: (props: TextProps) => <H5 resolver={resolver} {...props} />,
        h6: (props: TextProps) => <H6 resolver={resolver} {...props} />,
        p: (props: TextProps) => <P resolver={resolver} {...props} />,
        ul: (props: PropsWithChildren) => <UL resolver={resolver} {...props} />,
        li: (props: PropsWithChildren) => <LI resolver={resolver} {...props} />,
      },
    },
  });

  return children ? markdown : null;
}
