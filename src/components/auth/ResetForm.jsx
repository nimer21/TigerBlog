"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
//import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MdMailOutline, MdPassword } from 'react-icons/md'
import Link from 'next/link'
import GoogleBtn from './GoogleBtn'
import GithubBtn from './GithubBtn'
import { FaRegUser } from 'react-icons/fa6'


const FormSchema = z.object({
    password: z.string().min(6, {
      message: "Passwored must be at leatst 6 characters.",
    }),
    cpassword: z.string(),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Password must match",
    path: ["cpassword"]
  })
  

export default function ResetForm({ resetToken }) {

    // <z.infer<typeof FormSchema>>
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          password: "",
          cpassword: "",
        },
      })
    //   : z.infer<typeof FormSchema>
      function onSubmit(data) {
        const { password } = data;
        console.log(data);
      }

  return (
    <div className="grid place-items-center h-screen">
        <Card className="w-full max-w-[450px] shadow-lg
        border-t-4 border-blue-400">
  <CardHeader>
    <CardTitle className="text-center">Reset</CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-1 space-y-2">
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute
              left-2 top-2.5">
                <MdPassword size={20}
                color="#333" />
              </FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} className="pl-8 w-full" />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cpassword"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute
              left-2 top-2.5">
                <MdPassword size={20}
                color="#333" />
              </FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirm password" {...field} className="pl-8 w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Reset Password</Button>
      </form>
    </Form>

  </CardContent>
</Card>

    </div>
  )
}
