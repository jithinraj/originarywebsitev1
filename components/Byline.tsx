export function Byline({ author, date }:{ author:string; date:string }) {
  return (
    <p className="text-sm text-gray-500 my-2">
      By {author} · {date}
    </p>
  );
}
