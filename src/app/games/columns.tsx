"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export type Game = {
  slug: string;
  year: number;
  platform: "pc" | "ps" | "xbox" | "switch";
  name: string;
  officialPrice: number;
};

/**
 * Columns are where you define the core of what your table will look like. They define the data that will be displayed, how it will be formatted, sorted and filtered.
 */
export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: "platform",
    header: "Platform",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "officialPrice",
    header: () => <div className={"text-end"}>Official Price</div>, //
    cell: (curCell) => {
      // get the row of the current cell
      const amount = parseFloat(curCell.getValue() as string);
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className={"text-end font-medium"}>{formatted}</div>;
    },
  },

  // row actions
  {
    id: "actions",
    cell: ({ row }) => {
      const game = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className={"size-8 p-0"}>
              <span className={"sr-only"}>Open menu</span>
              <MoreHorizontal className={"h-4 w-4"} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={"end"}>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(game.slug)}
            >
              Copy game slug
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];