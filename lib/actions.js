'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get('title'),
    creator_email: formData.get('email'),
    creator: formData.get('name'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image')
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.'
    }
  }


  await saveMeal(meal);
  revalidatePath('/meals', 'layout');

  redirect('/meals');
}