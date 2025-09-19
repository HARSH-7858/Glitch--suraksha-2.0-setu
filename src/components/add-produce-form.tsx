"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Farmer, Produce } from "@/lib/data";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Leaf, Apple, Carrot } from "lucide-react";

const produceFormSchema = z.object({
  name: z.string().min(2, "Produce name must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  price: z.string().regex(/^(₹|\$|€)\d+(\/\w+)?$/, "Price must be in a valid format e.g., '₹120/kg'."),
  type: z.enum(["fruit", "vegetable", "herb"]),
  farmerId: z.string({ required_error: "Please select a farmer." }),
});

type ProduceFormValues = z.infer<typeof produceFormSchema>;

interface AddProduceFormProps {
  farmers: Farmer[];
  onProduceAdded: (newProduce: Produce) => void;
}

export function AddProduceForm({ farmers, onProduceAdded }: AddProduceFormProps) {
  const { toast } = useToast();
  const form = useForm<ProduceFormValues>({
    resolver: zodResolver(produceFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "₹",
      type: "vegetable",
      farmerId: "",
    },
  });

  const onSubmit = (data: ProduceFormValues) => {
    const newProduce: Produce = {
      id: `p${Date.now()}`,
      ...data,
      imageUrl: `https://picsum.photos/seed/${data.name.toLowerCase().replace(' ', '-')}/600/400`,
    };
    onProduceAdded(newProduce);
    toast({
      title: "Produce Added!",
      description: `${data.name} has been successfully added to the listings.`,
    });
    form.reset();
  };

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="p-0">
        <FormDescription>
          Fill out the form below to add your available produce to the list for students to see.
        </FormDescription>
      </CardHeader>
      <CardContent className="p-0 pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Produce Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Heirloom Tomatoes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the produce..." className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., ₹120/kg" {...field} />
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
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a produce type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fruit"><div className="flex items-center gap-2"><Apple className="h-4 w-4" />Fruit</div></SelectItem>
                        <SelectItem value="vegetable"><div className="flex items-center gap-2"><Carrot className="h-4 w-4" />Vegetable</div></SelectItem>
                        <SelectItem value="herb"><div className="flex items-center gap-2"><Leaf className="h-4 w-4" />Herb</div></SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
              control={form.control}
              name="farmerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Farmer</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the farmer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {farmers.map((farmer) => (
                        <SelectItem key={farmer.id} value={farmer.id}>
                          {farmer.name} - {farmer.farm}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Add Produce</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
