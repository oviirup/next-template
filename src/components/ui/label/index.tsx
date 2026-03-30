import { cn } from "@/lib/utils";

export function Label({ className, ...props }: Label.Props) {
  return (
    <label
      className={cn(
        "flex select-none items-center gap-2 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-data-disabled:opacity-50",
        className,
      )}
      data-slot="label"
      {...props}
    />
  );
}

export namespace Label {
  export type Props = React.ComponentProps<"label">;
}
