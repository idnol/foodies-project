import Link from "next/link";
import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid";
import {GetMeals} from "@/lib/meals";
import {Suspense} from "react";

export const metadata = {
  title: 'Meals Page',
  description: 'Meals Page Description',
};

async function Meals () {
  const meals = await GetMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage () {

  return (
      <>
        <header className={classes.header}>
          <h1>Delicios meals, created <span className={classes.highlight}>by you</span></h1>
          <p>Magna pars studiorum, prodita quaerimus. A communi observantia non est recedendum.</p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </p>
        </header>
        <main className={classes.main}>
          <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
            <Meals/>
          </Suspense>
        </main>
      </>
    )
}