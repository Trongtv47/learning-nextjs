export default function ProductDetal({
  params,
}: {
  params: { produtcId: string };
}) {
  return (
    <>
      <h1>Products DEtail {params.produtcId}</h1>
    </>
  );
}
