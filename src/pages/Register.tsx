
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });
  
  const onSubmit = async (values: RegisterFormValues) => {
    try {
      console.log('Register data:', values);
      
      // Simulate successful registration
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ name: values.name, email: values.email }));
      
      toast({
        title: "Welcome to Sponsify!",
        description: "Your account has been created successfully.",
      });
      
      navigate('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "Please try again later.",
      });
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 left-4" 
          onClick={handleGoBack}
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sponsify-primary dark:text-white">Join Sponsify</h2>
          <p className="mt-2 text-sm text-sponsify-secondary dark:text-gray-400">
            Start connecting with brands and creators today
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              Get Started
            </Button>
            
            <div className="text-center text-sm">
              <span className="text-sponsify-secondary dark:text-gray-400">
                Already have an account?{' '}
              </span>
              <Link 
                to="/login" 
                className="text-sponsify-primary dark:text-sponsify-accent hover:underline"
              >
                Sign in
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
