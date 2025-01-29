"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { CommandIcon } from "lucide-react";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p
        className="fixed bottom-0 left-0 right-0 hidden border-t-2 border-t-gray-800 bg-gray-100 p-3 text-center text-base font-bold text-gray-800 print:hidden xl:block">
        <span className="text-lg font-extrabold">Press</span>{" "}
        <kbd
          className="pointer-events-none inline-flex h-8 select-none items-center gap-2 rounded border-2 border-gray-800 bg-gray-300 px-3 font-mono text-base font-bold text-gray-800">
          <span className="text-lg font-extrabold">⌘</span>J
        </kbd>{" "}
        <span className="text-lg font-extrabold">to open the command menu</span>
      </p>

      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex items-center justify-center rounded-full shadow-2xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 print:hidden xl:hidden"
      >
        <CommandIcon className="w-6 h-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="max-h-screen overflow-y-auto space-y-2">
          <CommandEmpty className="text-gray-500">No results found.</CommandEmpty>
          <CommandGroup heading="Actions" className="space-y-1">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-300"
            >
              <span className="text-gray-800 text-md font-semibold">Print</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links" className="space-y-1 ">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-300"
              >
                <span className="text-gray-800 text-lg font-semibold">{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator className="my-2 border-t border-gray-200" />
        </CommandList>
      </CommandDialog>
    </>

  );
};
