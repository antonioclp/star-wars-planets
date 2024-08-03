import { Link } from "react-router-dom";

const Header = ({ userName }: { userName: string }) => {
  const onClickFunction = () => {
    localStorage.clear();
  };

  return (
    <header className="flex items-center justify-between bg-zinc-900 text-white p-4 shadow-md">
      <div className="flex items-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="icon"
          className="w-8 h-8"
        />
        <span className="text-lg font-semibold">{userName}</span>
      </div>
      <div className="flex items-center gap-4">
        <nav>
          <Link
            to="/login"
            className="flex items-center"
            onClick={onClickFunction}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png"
              alt="logout"
              className="w-8 h-8"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
