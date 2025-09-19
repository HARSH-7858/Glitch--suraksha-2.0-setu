'use server';

import { generateProduceImage as generateProduceImageFlow } from '@/ai/flows/generate-produce-image';

export async function handleGenerateImage(produceName: string) {
  try {
    const result = await generateProduceImageFlow({ produceName });
    if (result && result.imageUrl) {
      return { success: true, imageUrl: result.imageUrl };
    }
    return { success: false, error: 'Failed to generate image URL.' };
  } catch (error) {
    console.error('Image generation failed:', error);
    return { success: false, error: 'An unexpected error occurred during image generation.' };
  }
}
