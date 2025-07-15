"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const formSchema = z.object({
  userType: z.enum(
    ["property-owner", "tenant-guest", "broker-agent", "developer"],
    {
      required_error: "Please select a user type.",
    }
  ),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "property-owner",
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to your API
      console.log(values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast("Form submitted successfully!", {
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch {
      toast("Something went wrong.", {
        description: "Your form was not submitted. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-3 justify-center"
                >
                  <div
                    className={`
                    flex items-center space-x-2 rounded-full px-4 py-2 cursor-pointer
                    ${
                      field.value === "property-owner"
                        ? "bg-[#494949] text-white"
                        : "border border-gray-300 text-[#494949]"
                    }
                  `}
                  >
                    <RadioGroupItem
                      value="property-owner"
                      id="property-owner"
                      className="hidden"
                    />
                    <label
                      htmlFor="property-owner"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Property Owner
                    </label>
                  </div>

                  <div
                    className={`
                    flex items-center space-x-2 rounded-full px-4 py-2 cursor-pointer
                    ${
                      field.value === "buyer-tenant-guest"
                        ? "bg-[#494949] text-white"
                        : "border border-gray-300 text-[#494949]"
                    }
                  `}
                  >
                    <RadioGroupItem
                      value="buyer-tenant-guest"
                      id="buyer-tenant-guest"
                      className="hidden"
                    />
                    <label
                      htmlFor="buyer-tenant-guest"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Buyer/Tenant/Guest
                    </label>
                  </div>

                  <div
                    className={`
                    flex items-center space-x-2 rounded-full px-4 py-2 cursor-pointer
                    ${
                      field.value === "broker-agent-realtyfirm"
                        ? "bg-[#494949] text-white"
                        : "border border-gray-300 text-[#494949]"
                    }
                  `}
                  >
                    <RadioGroupItem
                      value="broker-agent-realtyfirm"
                      id="broker-agent-realtyfirm"
                      className="hidden"
                    />
                    <label
                      htmlFor="broker-agent-realtyfirm"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Broker/Agent/Realty Firm
                    </label>
                  </div>

                  <div
                    className={`
                    flex items-center space-x-2 rounded-full px-4 py-2 cursor-pointer
                    ${
                      field.value === "developer-representative"
                        ? "bg-[#494949] text-white"
                        : "border border-gray-300 text-[#494949]"
                    }
                  `}
                  >
                    <RadioGroupItem
                      value="developer-representative"
                      id="developer-representative"
                      className="hidden"
                    />
                    <label
                      htmlFor="developer-representative"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Developer Representative
                    </label>
                  </div>

                  <div
                    className={`
                    flex items-center space-x-2 rounded-full px-4 py-2 cursor-pointer
                    ${
                      field.value === "business"
                        ? "bg-[#494949] text-white"
                        : "border border-gray-300 text-[#494949]"
                    }
                  `}
                  >
                    <RadioGroupItem
                      value="business"
                      id="business"
                      className="hidden"
                    />
                    <label
                      htmlFor="business"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Business
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Phone Number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your phone number"
                    {...field}
                    className="rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Email Address"
                  {...field}
                  className="rounded-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject of your inquiry"
                  {...field}
                  className="rounded-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  {...field}
                  className="rounded-md min-h-[150px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-start">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#494949] hover:bg-[#494949]/80 text-white rounded-full py-4 w-full"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
