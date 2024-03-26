import Image from "next/image";

export default function Home() {
  return (
    <main className="p-12">
      <p>Hello World</p>
      <p>
        This Next JS template has been set up based on the recommended{" "}
        <a
          className="underline"
          href="https://ui.shadcn.com/docs/installation/next"
        >
          Shadcn/ui Next.js setup
        </a>
        .
      </p>
    </main>
  );
}
