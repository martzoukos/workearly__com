import SectionRenderer from "@/components/_renderers/SectionRenderer";
import Shell from "@/components/Shell";
import useCompositeResolver from "@/hooks/useCompositeResolver";
import { QueryItem } from "@workearly/api";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import styles from "./Default.module.scss";

const variants = cva(styles.root, {
  variants: {
    spacing: {
      Small: styles.spacingSmall,
      Medium: styles.spacingMedium,
      Large: styles.spacingLarge,
    },
  },
  defaultVariants: {
    spacing: "Small",
  },
});

interface PropsType extends VariantProps<typeof variants> {
  composite: QueryItem["Composite"];
  className?: string;
}

export default function Default({ composite, className, spacing }: PropsType) {
  const { getReferences } = useCompositeResolver(composite);
  const sections = getReferences("Section");

  return (
    <Shell.Composite composite={composite}>
      <div
        className={clsx(
          variants({
            spacing,
          }),
          className
        )}
      >
        {sections.map((section) => (
          <SectionRenderer key={section.sys.id} section={section} />
        ))}
      </div>
    </Shell.Composite>
  );
}
