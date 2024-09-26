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
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    email: z.string().min(6, {
      message: "Email is required.",
    }),
    password: z.string().min(6, {
      message: "Passwored must be at leatst 6 characters.",
    }),
    cpassword: z.string(),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Password must match",
    path: ["cpassword"]
  })
  

export default function RegisterForm() {

    // <z.infer<typeof FormSchema>>
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          cpassword: "",
        },
      })
    //   : z.infer<typeof FormSchema>
      function onSubmit(data) {
        const { name, email, password } = data;
        console.log(data);
        // toast({
        //   title: "You submitted the following values:",
        //   description: (
        //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //     </pre>
        //   ),
        // })
      }

  return (
    <div className="grid place-items-center h-screen">
        <Card className="w-full max-w-[450px] shadow-lg
        border-t-4 border-blue-400">
  <CardHeader>
    <CardTitle className="text-center">Register</CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>

    <div className="mb-4 flex flex-col items-center space-y-2">
    <GoogleBtn />
    <GithubBtn />
    </div>
    <p className="text-center text-sm mb-2">Or Login with email & password</p>
    
    <Form {...form}>
    {/* w-2/3 space-y-6 */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-1 space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute
              left-2 top-2.5">
                <FaRegUser size={20}
                color="#333" />
              </FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} className="pl-8 w-full" />
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
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute
              left-2 top-2.5">
                <MdMailOutline size={20}
                color="#333" />
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} className="pl-8 w-full" />
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
        <Button type="submit" className="w-full">Register</Button>
      </form>
    </Form>

  </CardContent>
  <CardFooter>    
    <div className="w-full">
        <p className="text-center text-sm">
            Already have an account? &nbsp;
            <Link href="/login">
            Login
            </Link>
        </p>
    </div>
  </CardFooter>
</Card>

    </div>
  )
}
