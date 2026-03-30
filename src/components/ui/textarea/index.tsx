import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: Textarea.Props) {
  return (
    <textarea
      className={cn(
        "field-sizing-content focus:highlight flex min-h-9 w-full min-w-0 shrink-0 resize-none rounded-md border border-input bg-input/50 px-3 py-2 text-base text-foreground transition-all placeholder:text-muted-fg focus:border-ring/50 md:text-sm",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 group-has-disabled/field:opacity-50",
        "aria-invalid:border-error aria-invalid:focus:outline-error/75",
        className,
      )}
      data-slot="textarea"
      {...props}
    />
  );
}

export namespace Textarea {
  export type Props = React.ComponentProps<"textarea">;
}
