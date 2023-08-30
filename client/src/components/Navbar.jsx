import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="py-2 px-5">Wellcome {user.username}</li>
            <li className="bg-indigo-500 py-2 px-3 rounded-sm">
              <Link to="/tasks">Tasks</Link>
            </li>
            <li className="bg-indigo-500 py-2 px-3 rounded-sm">
              <Link to="/add-task">Add Task</Link>
            </li>
            <li className="bg-indigo-500 py-2 px-3 rounded-sm">
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="bg-indigo-500 py-1 px-4 rounded-sm">
              <Link to="/login">Login</Link>
            </li>
            <li className="bg-indigo-500 py-1 px-4 rounded-sm">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
