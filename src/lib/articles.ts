import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"articles">;

export async function getPublishedArticles() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  return articles.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export async function getFeaturedArticles() {
  const articles = await getPublishedArticles();
  return articles.filter((article) => article.data.featured);
}
