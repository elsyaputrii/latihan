// app/blog/components/BlogCard.tsx
"use client";

type BlogCardProps = {
  id: string;
  title: string;
  description?: string;
};

export default function BlogCard({ id, title, description }: BlogCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ margin: "4px 0 0 0", fontSize: 13 }}>ID: {id}</p>
      {description && <p style={{ marginTop: 8 }}>{description}</p>}
    </div>
  );
}
