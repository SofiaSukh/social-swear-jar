export function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black rounded-2xl px-4 py-2 hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
}