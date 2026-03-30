"use client";

import { Input as BaseInput } from "baseui/input";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: Input.Props) {
  return (
    <BaseInput
      type={type}
      className={cn(
        "focus:highlight peer flex min-h-9 w-full min-w-0 shrink-0 rounded-md border border-input bg-input/50 px-3 py-1.5 text-base text-foreground transition-all placeholder:text-muted-fg focus:border-ring/50 md:text-sm",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 group-has-disabled/field:opacity-50",
        "aria-invalid:border-error aria-invalid:focus:outline-error/75",
        className,
      )}
      data-slot="input"
      {...props}
    />
  );
}

export namespace Input {
  export type Props = BaseInput.Props;
}
