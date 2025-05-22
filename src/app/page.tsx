import RefreshButton from "@/components/refresh-button";
import prisma from "@/lib/prisma";

export default async function Home() {
  const t0 = performance.now();
  const users = await prisma.user.findMany();
  const t1 = performance.now();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pb-16">
      <div className="flex gap-2">
        <h1 className="text-4xl font-semibold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
          <small> DB Call took </small> {parseInt(t1 - t0 + "")}ms
        </h1>
        <div>
          <RefreshButton />
        </div>
      </div>

      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)] text-[#333333]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.createdAt.toDateString()}
          </li>
        ))}
      </ol>
    </div>
  );
}
