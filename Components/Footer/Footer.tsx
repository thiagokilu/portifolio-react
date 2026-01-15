interface FooterProps {
  copyright: string;
}

export default function Footer({ copyright }: FooterProps) {
  return (
    <footer className=" py-8 px-6 flex flex-col items-center gap-4">
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent" />

      <span className=" text-sm tracking-wide">{copyright}</span>
    </footer>
  );
}
