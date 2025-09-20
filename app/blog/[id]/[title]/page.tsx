import BlogCard from "../../../components/BlogCard";
type Props = {
  params: { id: string; title: string };
};

export default function BlogByIdAndTitle({ params }: Props) {
  return (
    <main style={{ padding: 20 }}>
      <h1>Detail Blog</h1>
      <p>
        Blog dengan ID: <strong>{params.id}</strong> <br />
        Judul: <strong>{params.title}</strong>
      </p>

      <BlogCard
        id={params.id}
        title={params.title.replaceAll("-", " ")}
        description={`Artikel ini membahas tentang ${params.title.replaceAll("-", " ")}`}
      />
    </main>
  );
}
