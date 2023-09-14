function Header() {
  return (
    <div className="flex items-center justify-start w-full bg-black text-white">
      <div className="px-6 flex text-xl">
        <div className="cursor-pointer bg-yellow-500 h-full p-3">Home</div>
        <div className="cursor-pointer hover:bg-yellow-500 h-full p-3">
          News
        </div>
        <div className="cursor-pointer hover:bg-yellow-500 h-full p-3">
          About
        </div>
        <div className="cursor-pointer hover:bg-yellow-500 h-full p-3">
          Contact
        </div>
      </div>
    </div>
  );
}

export default Header;
