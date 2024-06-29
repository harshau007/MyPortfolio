export default function HeadCus({ params }) {
  return (
    <>
      <title>{params ? `${params}` : "Article"}</title>
      <link rel="icon" href="/icon.png" />
    </>
  );
}
