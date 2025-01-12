"use client";

import { Button } from "@/components/Shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/Shadcn/form";
import { Input } from "@/components/Shadcn/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  search: z.string().min(2).max(50),
});

export function SearchBar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function handleSearchForProdutct(values: z.infer<typeof formSchema>) {
    console.log(values.search);

    // TODO: When pressed enter push user to new page with their search in query paramters and make it work

    form.reset();
  }

  return (
    <div className="w-full flex-1 px-4 py-2 bg-blue-100 flex items-center gap-2 rounded-md">
      <SearchIcon className="w-6 h-6 text-blue-500" />

      <Form {...form}>
        <form
          className="w-full"
          onSubmit={form.handleSubmit(handleSearchForProdutct)}
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full outline-none border-0"
                    placeholder="Busque por um produto"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="hidden" />
        </form>
      </Form>
    </div>
  );
}
