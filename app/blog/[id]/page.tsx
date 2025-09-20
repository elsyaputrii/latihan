type Props = { params: { id: string } };

export default function BlogById({ params }: Props) {
  return (
    <main style={{ padding: 20 }}>
      <h1>Blog ID: {params.id}</h1>
    </main>
  );
}
