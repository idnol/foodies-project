'use client';
import classes from "@/app/meals/share/page.module.css";
import {useFormStatus} from "react-dom";

export default function MealsFormSubmit() {
  const {pending} = useFormStatus();

  return <button type="submit" disabled={pending}>{pending ? 'Loading' : 'Share Meal'}</button>
}