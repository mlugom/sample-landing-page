export default function Button({ className }) {
  return (
    <button className={"rounded-md blue-background px-7 py-2 font-semibold " + className}>
      Sign up
    </button>
  );
}