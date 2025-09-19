"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Produce, Farmer } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle } from 'lucide-react';

const produceSchema = z.object({
  name: z.string().min(3, 'Produce name must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  type: z.enum(['fruit', 'vegetable', 'herb']),
  price: z.string().min(1, 'Price is required.'),
  farmerId: z.string(),
});

type ProduceFormValues = z.infer<typeof produceSchema>;

interface AddProduceFormProps {
  farmers: Farmer[];
  onAddProduce: (produce: Omit<Produce, 'id' | 'imageUrl'>) => void;
}

export function AddProduceForm({ farmers, onAddProduce }: AddProduceFormProps) {
  const { toast } = useToast();
  const form = useForm<ProduceFormValues>({
    resolver: zodResolver(produceSchema),
    defaultValues: {
      name: '',
      description: '',
      type: 'vegetable',
      price: '',
      farmerId: farmers[0]?.id || '',
    },
  });

  function onSubmit(data: ProduceFormValues) {
    onAddProduce(data);
    form.reset();
    toast({
      title: "Produce Added!",
      description: `${data.name} has been added to the list.`,
    });
  }

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="pt-2">
        <CardDescription>
          Fill out the form below to add your available produce to the list for students to see.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produce Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Organic Apples" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produce Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fruit">Fruit</SelectItem>
                        <SelectItem value="vegetable">Vegetable</SelectItem>
                        <SelectItem value="herb">Herb</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Crisp and sweet, perfect for snacking."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., ₹150/kg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="farmerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Farm</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your farm" />
                        </Trigger>
                      </FormControl>
                      <SelectContent>
                        {farmers.map(farmer => (
                          <SelectItem key={farmer.id} value={farmer.id}>
                            {farmer.farm} ({farmer.name})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Add Produce</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
