export default function Footer() {
  return (
    <footer className="mt-10 bg-blue-950  border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="container   mx-auto py-8 text-center text-lg text-zinc-200">
        © {new Date().getFullYear()} Portfolio(ADev)
      </div>
    </footer>
  );
}
