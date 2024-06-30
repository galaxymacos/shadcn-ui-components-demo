import { Column } from "@tanstack/table-core";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { RxCaretSort, RxEyeNone } from "react-icons/rx";
import React from "react";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            size={"sm"}
            className={"-ml-3 h-8 data-[state=open]:bg-accent"}
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className={"ml-2 size-4"} />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className={"ml-2 size-4"} />
            ) : (
              <RxCaretSort className={"ml-2 size-4"} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={"start"}>
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className={"mr-2 size-3.5 text-muted-foreground/70"} />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon
              className={"mr-2 size-3.5 text-muted-foreground/70"}
            />
            Desc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <RxEyeNone className={"mr-2 size-3.5 text-muted-foreground/70"} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
