import RawCheckbox from "@/components/Checkbox";
import Text from "@/components/Text";
import clsx from "clsx";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import styles from "./FormPrimitives.module.scss";

interface FormProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  className?: string;
  placeholder?: string;
}

export function Input<T extends FieldValues>({
  label,
  name,
  control,
  type = "text",
  className,
  placeholder,
}: FormProps<T> & { type?: string }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={clsx(styles.fieldContainer, className)}>
          <Text as="label">{label}</Text>
          <input
            {...field}
            type={type}
            className={styles.input}
            placeholder={placeholder}
          />
        </div>
      )}
    />
  );
}

export function Textarea<T extends FieldValues>({
  label,
  name,
  control,
  className,
  placeholder,
}: FormProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={clsx(styles.fieldContainer, className)}>
          <Text as="label">{label}</Text>
          <textarea
            {...field}
            className={styles.textarea}
            placeholder={placeholder}
          />
        </div>
      )}
    />
  );
}

export function Checkbox<T extends FieldValues>({
  label,
  name,
  control,
  className,
}: FormProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RawCheckbox
          checked={field.value}
          onCheckedChange={(value) => field.onChange(value)}
          className={className}
        >
          <Text as="small">{label}</Text>
        </RawCheckbox>
      )}
    />
  );
}
