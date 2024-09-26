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


const FormSchema = z.object({
    email: z.string().min(6, {
      message: "Email is required.",
    }),
    password: z.string().min(6, {
      message: "Passwored must be at leatst 6 characters.",
    }),
  })
  

export default function LoginForm() {

    // <z.infer<typeof FormSchema>>
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
    //   : z.infer<typeof FormSchema>
      function onSubmit(data) {
        const { email, password } = data;
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
    <CardTitle className="text-center">Login</CardTitle>
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
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute
              left-2 top-2.5">
                <MdMailOutline size={20}
                color="#333" />
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="email" {...field} className="pl-8 w-full" />
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
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </Form>

  </CardContent>
  <CardFooter>    
    <div className="w-full flex-between">
        <p className="text-left text-sm">
            <Link href="/forgot">
            Forgot Password
            </Link>
        </p>
        <p className="text-left text-sm">
            New User? &nbsp;
            <Link href="/register">
            Register
            </Link>
        </p>
    </div>
  </CardFooter>
</Card>

    </div>
  )
}
