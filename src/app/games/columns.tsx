"use client";

import { ColumnDef } from "@tanstack/react-table";

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
];
