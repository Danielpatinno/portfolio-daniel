"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

import emailjs from "@emailjs/browser"

import { Toaster, toast } from "sonner"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"



const formSchema = z.object({
    name: z.string().min(3, {
        message: "Dígite seu nome."
    }),
    email: z.string().email({
        message: "Digite um e-mail válido."
      }),
    message: z.string().min(1, {
        message: "Escreve uma mensagem"
    })
})

export function FormContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
      defaultValues: {
        name: '',
        email: '',
        message: ''
      }
  })

  const { reset } = form

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        formSchema.parse(values)
  
        const templateParams = {
          user_name: values.name,
          user_email: values.email,
          message: values.message
        }
  
        emailjs.send(
          'service_iwj7nzj',
          'template_4rq2k3i',
          templateParams,
          'DBUTbU1__bZj9-cQp'
        )
  
        toast.success('Mensagem enviada.')
        console.log('Fórmulário enviado com sucesso!')
        reset()
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="m-auto w-10/12 space-y-8">
        <FormField 
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome:</FormLabel>
              <FormControl>
                <Input placeholder='Dígite seu nome aqui' {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail:</FormLabel>
              <FormControl>
                <Input placeholder='Dígite seu e-mail aqui' {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem:</FormLabel>
              <FormControl>
                <Textarea placeholder='Dígite sua mensagem aqui' {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Enviar Mensagem</Button>
      </form>
      <Toaster />
    </Form>
  )
}