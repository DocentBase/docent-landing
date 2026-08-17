import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HELP_ARTICLES } from "@/data/help-articles";
import { ArticleClientView } from "@/components/help/articles/ArticleClientView";

export function generateStaticParams() {
  return HELP_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const article = HELP_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found — DocentBase Help",
    };
  }

  return {
    title: `${article.title} — DocentBase Help & Documentation`,
    description: article.summary,
    keywords: article.keywords,
    openGraph: {
      title: `${article.title} — DocentBase Help`,
      description: article.summary,
      url: `https://docentbase.com/help/articles/${article.slug}`,
      siteName: "DocentBase Help",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);
  const article = HELP_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = HELP_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return <ArticleClientView article={article} relatedArticles={relatedArticles} />;
}
