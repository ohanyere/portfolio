
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white text-center">
      <div className="px-6 py-14 max-w-3xl mx-auto">
        <p className="text-[1.3rem] sm:text-[1.6rem] font-medium text-neutral-800 leading-relaxed tracking-wide mb-4">
          <span className="font-semibold text-neutral-900">
            Francis is fast-evolving
          </span>{" "}
          — always learning and getting things done. Follow my journey as I
          grow, build, and refine.
        </p>

        <div className="mt-6 text-sm text-neutral-500">
          © {year} Francis — crafted with calm precision.
        </div>
      </div>
    </footer>
  );
}
