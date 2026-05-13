"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import emailjs from "@emailjs/browser";

import { Toaster, toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SurfaceCard } from "@/components/layout/surface-card";

export function FormContact() {
  const t = useTranslations("form");

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(3, { message: t("errorName") }),
        email: z.string().email({ message: t("errorEmail") }),
        message: z.string().min(1, { message: t("errorMessage") }),
      }),
    [t],
  );

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { reset } = form;

  function onSubmit(values: FormValues) {
    try {
      formSchema.parse(values);

      const templateParams = {
        user_name: values.name,
        user_email: values.email,
        message: values.message,
      };

      emailjs.send(
        "service_iwj7nzj",
        "template_4rq2k3i",
        templateParams,
        "DBUTbU1__bZj9-cQp",
      );

      toast.success(t("toastSuccess"));
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <>
        <SurfaceCard className="p-6 sm:p-8">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto w-full max-w-lg space-y-8 lg:mx-0"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("placeholderName")} {...field} />
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
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("placeholderEmail")} {...field} />
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
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("placeholderMessage")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">{t("submit")}</Button>
          </form>
        </SurfaceCard>
        <Toaster />
      </>
    </Form>
  );
}
