'use server';

/**
 * @fileOverview A flow to generate an image of produce based on its description.
 *
 * - generateProduceImage - A function that generates an image of produce.
 * - GenerateProduceImageInput - The input type for the generateProduceImage function.
 * - GenerateProduceImageOutput - The return type for the generateProduceImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProduceImageInputSchema = z.object({
  produceName: z.string().describe('The name of the produce to generate an image for.'),
});
export type GenerateProduceImageInput = z.infer<typeof GenerateProduceImageInputSchema>;

const GenerateProduceImageOutputSchema = z.object({
  imageUrl: z.string().describe('The generated image URL as a data URI.'),
});
export type GenerateProduceImageOutput = z.infer<typeof GenerateProduceImageOutputSchema>;

export async function generateProduceImage(input: GenerateProduceImageInput): Promise<GenerateProduceImageOutput> {
  const {media} = await ai.generate({
    model: 'googleai/imagen-4.0-fast-generate-001',
    prompt: `a photorealistic image of ${input.produceName}, on a white background`,
  });

  if (!media || !media.url) {
    throw new Error('Failed to generate image for produce.');
  }

  return {imageUrl: media.url};
}

const generateProduceImageFlow = ai.defineFlow(
  {
    name: 'generateProduceImageFlow',
    inputSchema: GenerateProduceImageInputSchema,
    outputSchema: GenerateProduceImageOutputSchema,
  },
  generateProduceImage
);
