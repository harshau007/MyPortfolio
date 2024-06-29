"use client";
import { Share } from "lucide-react";
import {
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useState } from "react";
import { buttonVariants } from "@/components/button";
import { cn } from "@/lib/utils";

export function Control({ url }: { url: string }): React.ReactElement {
  const [open, setOpen] = useState(false);
  const onClick = (): void => {
    setOpen(true);
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
  };

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        className={cn(
          buttonVariants({
            className: "gap-3 rounded-full cursor-pointer",
            variant: "secondary",
          })
        )}
        onClick={onClick}
      >
        <Share className="size-4 w-5 h-5" />
        Share Post
      </TooltipTrigger>
      <TooltipContent className="rounded-lg border bg-popover p-2 text-sm text-popover-foreground">
        Copied
      </TooltipContent>
    </Tooltip>
  );
}
