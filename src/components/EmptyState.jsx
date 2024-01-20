export default function EmptyState({ title, text }) {
  return (
    <div className=" space-y-4 text-center font-bold">
      <h1 className=" text-4xl">{title}</h1>
      <p className=" text-xl">{text}</p>
    </div>
  );
}
