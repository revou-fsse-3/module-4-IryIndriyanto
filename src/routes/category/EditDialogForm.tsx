import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CATEGORY_API_URL } from "@/utils/constant";
import { useNavigate } from "react-router-dom";

const FormSchema = yup.object({
  name: yup.string().required(),
  is_active: yup.boolean().optional(),
});

export function DialogForm() {
  const form = useForm<yup.InferType<typeof FormSchema>>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: "",
      is_active: false,
    },
  });


  const navigate = useNavigate()
  async function onSubmit (data: yup.InferType<typeof FormSchema>) {
    try {
      const response = await fetch(CATEGORY_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        // Optionally, you might handle the successful registration response
        console.log("Registration successful:", data);
        navigate("/category")
      } else {
        // Handle registration failure (e.g., validation errors, server error)
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Input Your Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="is_active"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md px-2 pb-6">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Is user active?</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
