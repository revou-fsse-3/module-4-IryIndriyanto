import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@/lib/utils";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const formSchema = yup.object().shape({
    fullName: yup
      .string()
      .required()
      .min(2, "Full Name must be at least 2 characters."),
    email: yup.string().required().email(),
    birthDate: yup.date().required("birth date is required"),
    streetAddress: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.number().required(),
    username: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

  type formValues = {
    fullName: string;
    email: string;
    birthDate: Date;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: number;
    username: string;
    password: string;
  };

  const form = useForm<formValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      streetAddress: "",
      city: "",
      state: "",
      username: "",
      password: "",
    },
  });

  const handleNextStep0 = async () => {
    const isStepValid = await form.trigger(["fullName", "email", "birthDate"]);
    if (isStepValid) setStep((currentStep) => currentStep + 1);
  };

  const handleNextStep1 = async () => {
    const isStepValid = await form.trigger([
      "streetAddress",
      "city",
      "state",
      "zipCode",
    ]);
    if (isStepValid) setStep((currentStep) => currentStep + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const onSubmit = (data: formValues) => {
    alert(JSON.stringify(data));
    console.log(data);
    location.reload();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="flex flex-col justify-between w-[350px] h-[600px] p-4 sm:w-[450px]">
          <div>
            <div className="px-6 ">
              <Progress value={(step+1)*100/3}/>
            </div>
            {step === 0 && (
              <>
                <CardHeader>
                  <CardTitle className="text-center">
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Input Your Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Input Your Email" {...field} />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2 mt-4">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <DayPicker
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                              captionLayout="dropdown-buttons"
                              fromYear={1990}
                              toYear={2025}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </>
            )}

            {step === 1 && (
              <>
                {/* Address Information */}
                <CardHeader>
                  <CardTitle className="text-center">
                    Address Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Input Your Street Address"
                            {...field}
                          />
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
            )}

            {step === 2 && (
              <>
                {/* Acccount Information */}
                <CardHeader>
                  <CardTitle className="text-center">
                    Account Information
                  </CardTitle>
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
                          <Input
                            type="password"
                            placeholder="Input Your Password"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </>
            )}
          </div>

          <CardFooter
            className={cn("flex justify-between", step === 0 && " justify-end")}
          >
            {step > 0 && (
              <Button
                variant={"outline"}
                onClick={handlePrevious}
                type="button"
                className={cn(" w-24")}
              >
                Previous
              </Button>
            )}
            {step === 0 && (
              <Button
                className={cn(" w-24")}
                type="button"
                onClick={handleNextStep0}
              >
                Next
              </Button>
            )}
            {step === 1 && (
              <Button
                className={cn(" w-24")}
                type="button"
                onClick={handleNextStep1}
              >
                Next
              </Button>
            )}
            {step === 2 && (
              <Button className={cn(" w-24")} type="submit">
                Submit
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default MultiStepForm;
