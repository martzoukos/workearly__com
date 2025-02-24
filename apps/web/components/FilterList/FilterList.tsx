import Checkbox from "@/components/Checkbox";
import Radio from "@/components/Radio";
import Text from "@/components/Text";
import { RadioGroup } from "radix-ui";
import styles from "./FilterList.module.scss";

type BaseProps = {
  title: string;
  items: Array<{ title: string; value: string }>;
};

type ChecklistProps = {
  type: "checkbox";
  selected: string[];
  onChange: (selected: string[]) => void;
};

type RadiolistProps = {
  type: "radio";
  selected: string;
  onChange: (selected: string) => void;
};

type PropsType = BaseProps & (ChecklistProps | RadiolistProps);

export default function FilterList({
  title,
  items,
  selected,
  onChange,
  type,
}: PropsType) {
  return (
    <div className={styles.root}>
      <Text as="small">{title}</Text>
      {type === "checkbox" &&
        items.map((item) => (
          <Checkbox
            key={item.value}
            className={styles.item}
            checked={selected.includes(item.value)}
            onCheckedChange={(checked) =>
              onChange(
                checked
                  ? [...selected, item.value]
                  : selected.filter((v) => v !== item.value)
              )
            }
          >
            <Text as="small">{item.title}</Text>
          </Checkbox>
        ))}

      {type === "radio" && (
        <RadioGroup.Root value={selected} onValueChange={onChange}>
          {items.map((item) => (
            <Radio key={item.value} className={styles.item} value={item.value}>
              <Text as="small">{item.title}</Text>
            </Radio>
          ))}
        </RadioGroup.Root>
      )}
    </div>
  );
}
