import React from "react";
import { DataTable } from "@/app/games/data-table";
import { columns, Game } from "@/app/games/columns";
import { games } from "@/data";

async function getData(): Promise<Game[]> {
  return games;
}

const GamesPage = async () => {
  const data = await getData();
  return (
    <div className={"container mx-auto py-10"}>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default GamesPage;
