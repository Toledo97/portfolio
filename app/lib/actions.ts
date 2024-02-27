'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Signature } from "@/app/lib/definitions";
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    user_id: z.string(),
    username: z.string(),
    platform: z.enum(['Github', 'LinkedIn']),
    message: z.string(),
    date: z.string()
  });
   
const CreateSignature = FormSchema.omit({ date: true });

export async function createSignature(signature:Signature) {
    const { user_id, username, platform, message } = CreateSignature.parse({
        user_id: signature.userID,
        username: signature.username,
        platform: signature.platform,
        message: signature.message,
      });
    const date = new Date().toISOString();
    
    await sql `
    INSERT INTO signatures (user_id, username, message, platform, date)
    VALUES (${user_id}, ${username}, ${message}, ${platform}, ${date})`

    revalidatePath('/dashboard/guestbook');
    redirect('/dashboard/guestbook');
}

export async function updateSignature(signature:Signature) {
  const { user_id, message } = CreateSignature.parse({
      user_id: signature.userID,
      message: signature.message,
      date: signature.date,
    });
  const date = new Date().toISOString();
  
  await sql`
    UPDATE signatures
    SET message = ${message}, date = ${date}
    WHERE id = ${user_id}
  `;

  revalidatePath('/dashboard/guestbook');
  redirect('/dashboard/guestbook');
}

export async function checkSignature(userID:string) {
  
}