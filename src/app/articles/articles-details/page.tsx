export default async function ArticlePage({ params }: { params: Promise<{ id: string }>; }) {

    const { id } = await params;
    
    return (
      <article className="space-y-4">
        <h3 className="text-lg font-semibold">
          Article #{id}
        </h3>
        <p className="text-neutral-600">
          Contenu détaillé de l’article.
        </p>
      </article>
    );
  }