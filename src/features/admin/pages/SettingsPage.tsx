
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Save } from 'lucide-react';

const SettingsPage = () => {
  const form = useForm({
    defaultValues: {
      siteName: 'Sponsify',
      siteUrl: 'https://sponsify.com',
      contactEmail: 'admin@sponsify.com',
      darkMode: true,
      emailNotifications: true,
      marketingEmails: false,
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would save the settings to your backend
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>Configure your platform settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input 
                      id="siteName"
                      {...form.register('siteName')}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="siteUrl">Site URL</Label>
                    <Input 
                      id="siteUrl"
                      {...form.register('siteUrl')}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input 
                      id="contactEmail"
                      type="email"
                      {...form.register('contactEmail')}
                    />
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="darkMode"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between">
                        <div className="space-y-0.5">
                          <FormLabel>Dark Mode</FormLabel>
                          <FormDescription>
                            Enable dark mode by default
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="emailNotifications"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between">
                        <div className="space-y-0.5">
                          <FormLabel>Email Notifications</FormLabel>
                          <FormDescription>
                            Receive email notifications for important updates
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="marketingEmails"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between">
                        <div className="space-y-0.5">
                          <FormLabel>Marketing Emails</FormLabel>
                          <FormDescription>
                            Receive marketing and promotional emails
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Settings</CardTitle>
            <CardDescription>Manage your API keys and access</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="apiKey">API Key</Label>
                <div className="flex gap-2">
                  <Input 
                    id="apiKey"
                    value="sk_test_51M0v2KSIm1tySNJ07V8kKjIj0GW..."
                    readOnly
                    type="password"
                  />
                  <Button variant="outline">Show</Button>
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is your secret API key. Keep it secure and do not expose it in client-side code.
                </p>
              </div>
              
              <div className="grid gap-2">
                <Label>Allowed Origins</Label>
                <Input 
                  placeholder="https://yourdomain.com"
                />
                <p className="text-sm text-muted-foreground">
                  Specify domains that are allowed to make API requests. Use comma for multiple domains.
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button>
                  Save API Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SettingsPage;
