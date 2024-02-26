'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Signature } from "@/app/lib/definitions";

const FormSchema = z.object({
    user_id: z.string(),
    username: z.string(),
    platform: z.enum(['Github', 'LinkedIn']),
    message: z.string(),
    date: z.string(),
  });
   
  const CreateSignature = FormSchema.omit({ id: true, date: true });

export async function createSignature(params:Signature) {
    const { user_id, username, platform, message, date} = CreateSignature.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      });
}