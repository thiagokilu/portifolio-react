export default function Footer() {
  return (
    <footer className=" py-8 px-6 flex flex-col items-center gap-4">
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent" />

      <span className=" text-sm tracking-wide">
        © {new Date().getFullYear()} Thiago Alexandre
      </span>
    </footer>
  );
}
