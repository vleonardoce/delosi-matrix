import Matrix from "./matrix";

export const metadata = {
  title: "Matrix",
  description: "Matriz para prueba técnica.",
};

export default function Page() {
  return (
    <main>
      <h1 className="title">Matriz</h1>
      <Matrix />
    </main>
  );
}
