import Link from "next/link";
import { getArticles } from "../utils/article.util";
import { Article } from "../types/article.type";
import ArticlesListClient from "./ArticlesListClient";

export default async function ArticlesList() {
  const articles = await getArticles();

  return <ArticlesListClient articles={articles} />;
}