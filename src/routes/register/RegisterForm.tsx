import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const RegisterForm = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  });

  type formValues = yup.InferType<typeof formSchema>;
  const form = useForm<formValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: formValues) => {
    alert(JSON.stringify(data));
    console.log(data);
    location.reload();
  };

  return (
    <div className=" flex flex-col justify-center items-center min-h-[92vh] p-8 bg-slate-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="flex flex-col justify-between w-[350px] p-4 sm:w-[450px]">
            <div>
              <CardHeader>
                <CardTitle className="text-center">Register</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Input Your Name" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Input Your Username" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Input Your Password" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </div>
            <CardFooter className="flex flex-col items-center gap-2">
              <Button className="w-3/4">Register</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
