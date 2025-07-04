"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(1, { message: "Company is required." }),
  position: z.string().min(1, { message: "Position is required." }),
  phone: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .regex(/^[0-9+\-() ]+$/, { message: "Invalid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  announcement: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to be added to the announcement channel.",
    }),
  }),
});

export default function LearnMore() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      position: "",
      phone: "",
      email: "",
      announcement: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      toast.success("Thank you! We'll be in touch.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    form.reset();
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-white px-4 py-20">
      <h1 className="font-bold text-3xl text-center mb-4">
        WE ARE CENTRALISING REAL ESTATE.
      </h1>
      <p className="text-center max-w-3xl mb-8">
        ...and we&apos;d like you to be part of it. Whether you&apos;re an
        independent broker, working as an agent, a developer representative,
        real estate firm, or any business related to real estate and providing a
        home, any business, big or small. We&apos;d like you to join us.
      </p>
      <section className="border border-gray-300 rounded-2xl p-6 mb-8 max-w-3xl w-full bg-gray-50">
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 rounded-full relative min-w-[60px] h-[60px]"></div>
          <div className="absolute text-xl font-bold uppercase">
            LET US REACH YOU.
          </div>
        </div>
        <div className="text-sm">
          Kindly send us your information for our contacting. By providing your
          contact details, you allow us to use your information for legitimate
          purposes and initiatives by Empyrean such as being added to our
          network for further contacting or partnerships.
        </div>
      </section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border border-gray-300 rounded-2xl p-8 max-w-3xl w-full bg-white flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NAME</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>COMPANY</FormLabel>
                <FormControl>
                  <Input placeholder="Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>POSITION</FormLabel>
                <FormControl>
                  <Input placeholder="Position" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PHONE NUMBER</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EMAIL ADDRESS</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="announcement"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-4">
                <FormControl>
                  <input
                    type="checkbox"
                    className="w-5 h-5 mr-2 accent-gray-700"
                    checked={field.value}
                    onChange={field.onChange}
                    required
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  I&apos;D LIKE TO BE ADDED TO THE OFFICIAL ANNOUNCEMENT CHANNEL
                  OF EMPYREAN GROUP OF PARTNERS
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-[#494949] hover:bg-[#494949]/80 text-white rounded-full py-4 w-full"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
