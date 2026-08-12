interface LiveProjectButtonProps {
  href?: string;
  label?: string;
}

export default function LiveProjectButton({
  href,
  label = "查看详情",
}: LiveProjectButtonProps) {
  const cls =
    "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {label}
      </a>
    );
  }
  return (
    <button type="button" className={cls}>
      {label}
    </button>
  );
}
