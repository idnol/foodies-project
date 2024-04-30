import Link from "next/link";
import classes from "./page.module.css"
import Image from "next/image";
import {GetMeal} from "@/lib/meals";
import {notFound} from "next/navigation";

export async function generateMetadata({params}) {
  const meal = GetMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default function MealsSinglePage ({params}) {
  const meal = GetMeal(params.slug);

  if (!meal) {
    notFound();
  }

  let {title, image, summary, instructions, creator, creator_email} = meal;
  instructions = instructions.replace(/\n/g, '<br />')

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={`https://practic-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com/${image}`} fill  alt={title}/>
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: instructions
        }}></p>
      </main>
    </>)
}