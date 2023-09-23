import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div className="flex justify-between mt-4 shadow-lg p-5">
            <div>
              <h1 className="text-2xl font-bold text-cyan-600">Phone Shop</h1>
            </div>
            <div>
                <ul className="flex gap-8">
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                        }
                        >
                        Home
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                        }
                        >
                        Favorites
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                        }
                        >
                        Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navber;