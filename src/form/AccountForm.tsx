import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccountForm = () => {
  const formSchema = yup.object().shape({
    fullName: yup.string().min(2, "Full Name must be at least 2 characters."),
    email: yup.string().email().required(),
    birthDate: yup.date().required("it is a required field"),
    streetAddress: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  });

  type formValues = yup.InferType<typeof formSchema>;
  const form = useForm<formValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      // birthDate: new Date(),
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
    },
  });

  return (
    <>
      {/* Acccount Information */}
      <CardHeader>
        <CardTitle className="text-center">Account Information</CardTitle>
      </CardHeader>
      <CardContent>
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
                <Input placeholder="Input Your Password" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </>
  );
};

export default AccountForm;
