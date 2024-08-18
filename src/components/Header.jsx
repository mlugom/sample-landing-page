export default function Header() {
  return (
    <header className="p-3 flex justify-between items-center w-full">
      <h2 className="font-bold text-xl">Header Logo</h2>
      <nav>
        <ul className="flex gap-3">
          <a>header link one</a>
          <a>header link two</a>
          <a>header link three</a>
        </ul>
      </nav>
    </header>
  );
}
