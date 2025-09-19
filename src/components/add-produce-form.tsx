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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Leaf, Apple, Carrot } from "lucide-react";

const produceFormSchema = z.object({
  name: z.string().min(2, "Produce name must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  price: z.string().regex(/^₹\d+(\/\w+)?$/, "Price must be in the format '₹120/kg' or '₹50/bunch'."),
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
    };
    onProduceAdded(newProduce);
    toast({
      title: "Produce Added!",
      description: `${data.name} has been successfully added to the listings.`,
    });
    form.reset();
  };

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="pt-2 px-1">
        <CardDescription className="text-foreground/70">
          Fill out the form below to add your available produce to the list for students to see.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Produce Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Heirloom Tomatoes" {...field} className="bg-background/50 border-white/20"/>
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
                    <Textarea placeholder="Describe the produce..." className="resize-none bg-background/50 border-white/20" {...field} />
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
                      <Input placeholder="e.g., ₹120/kg" {...field} className="bg-background/50 border-white/20"/>
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
                        <SelectTrigger className="bg-background/50 border-white/20">
                          <SelectValue placeholder="Select a produce type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fruit"><div className="flex items-center gap-2"><Apple />Fruit</div></SelectItem>
                        <SelectItem value="vegetable"><div className="flex items-center gap-2"><Carrot />Vegetable</div></SelectItem>
                        <SelectItem value="herb"><div className="flex items-center gap-2"><Leaf />Herb</div></SelectItem>
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
                      <SelectTrigger className="bg-background/50 border-white/20">
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
            <Button type="submit" size="lg" className="w-full">Add Produce</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
