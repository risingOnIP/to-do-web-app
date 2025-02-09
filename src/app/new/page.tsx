import { prisma } from "@/src/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function createToDo(data: FormData) {
  "use server";
  const title = data.get("title") as string; //inside of get has to be same as name in input
  if (typeof title !== "string") {
    throw new Error("title is not a string");
  } else if (title.length === 0) {
    throw new Error("title length is 0");
  }

  await prisma.todo.create({ data: { title, complete: false, updatedAt: new Date() } });
  redirect("/");
}

const newPage = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <div className="text-2xl">New</div>
      </header>

      <form className="flex gap-2 flex-col" action={createToDo}>
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent 
          rounded px-2 py-1 outline-none 
          focus-within:border-slate-100"
        ></input>
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="mx-2 my-3 border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 active:bg-slate-700 active:scale-95 transition duration-200 ease-in-out outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="mx-2 my-3 border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 active:bg-slate-700 active:scale-95 transition duration-200 ease-in-out outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default newPage;
