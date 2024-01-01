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

const AddressForm = () => {
  const formSchema = yup.object().shape({
    fullName: yup.string().min(2, "Full Name must be at least 2 characters."),
    email: yup.string().email().required(),
    birthDate: yup.date().required("it is a required field"),
    streetAddress: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.string().required(),
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
    },
  });

  return (
    <>
      {/* Address Information */}
      <CardHeader>
        <CardTitle className="text-center">Address Information</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="Input Your Street Address" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Input Your City" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Input Your State" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="Input Your Zip Code" {...field} />
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

export default AddressForm;
