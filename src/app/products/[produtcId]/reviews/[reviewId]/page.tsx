export default function ReviewDetail({
  params,
}: {
  params: { produtcId: string; reviewId: string };
}) {
  return (
    <>
      <h1>
        Products DEtail {params.produtcId} cua review {params.reviewId}
      </h1>
    </>
  );
}
