export default function Header() {
  return (
    <header className="p-3 flex justify-between items-center w-full">
      <h2 className="font-bold text-xl">Header Logo</h2>
      <nav>
        <ul className="flex gap-3">
          <NavItem>header link one</NavItem>
          <NavItem>header link two</NavItem>
          <NavItem>header link three</NavItem>
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ children }) {
  return <a className="hover:underline cursor-pointer">{children}</a>;
}
