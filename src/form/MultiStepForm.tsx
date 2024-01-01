import UserInfoForm from "./UserInfoForm";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";
import { Card, CardFooter } from "@/components/ui/card";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";

const MultiStepForm = () => {
  const formSchema = yup.object().shape({
    fullName: yup
      .string()
      .required()
      .min(2, "Full Name must be at least 2 characters."),
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
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: formValues) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className=" w-[350px] p-4 space-y-6 sm:w-[450px]">
          <UserInfoForm />
          <AddressForm />
          <AccountForm />
          <CardFooter className="flex justify-between">
            <Button variant={"outline"} type="submit">
              Previous
            </Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default MultiStepForm;
