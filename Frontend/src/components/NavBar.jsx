import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import { Moon, Sun, LogOut, Settings, User, MessageSquare, ChevronRight } from "lucide-react";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  if (!authUser) return null;

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-200 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="size-5 text-primary" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Aura Chat
          </span>
        </Link>
      </div>

      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
          >
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={authUser.profilePic || "https://api.dicebear.com/7.x/avataaars/svg?seed=" + authUser.fullName}
                alt={authUser.fullName}
                className="object-cover"
              />
            </div>
          </div>
          <ul 
            tabIndex={0} 
            className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-xl w-64 border border-base-200/50 animate-in fade-in-0 zoom-in-95"
          >
            <div className="px-2 py-3 border-b border-base-200/50">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full ring ring-primary/20 ring-offset-base-100 ring-offset-2">
                  <img
                    src={authUser.profilePic || "https://api.dicebear.com/7.x/avataaars/svg?seed=" + authUser.fullName}
                    alt={authUser.fullName}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base-content">{authUser.fullName}</h3>
                  <p className="text-sm text-base-content/70">{authUser.email}</p>
                </div>
              </div>
            </div>

            <div className="py-2">
              <li>
                <Link 
                  to="/profile" 
                  className="flex items-center justify-between hover:bg-base-200/50 transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <User className="size-4" />
                    <span>Profile</span>
                  </div>
                  <ChevronRight className="size-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/settings" 
                  className="flex items-center justify-between hover:bg-base-200/50 transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Settings className="size-4" />
                    <span>Settings</span>
                  </div>
                  <ChevronRight className="size-4 opacity-50" />
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="flex items-center justify-between hover:bg-base-200/50 transition-colors rounded-lg w-full"
                >
                  <div className="flex items-center gap-2">
                    {theme === "light" ? (
                      <Moon className="size-4" />
                    ) : (
                      <Sun className="size-4" />
                    )}
                    <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                  </div>
                  <ChevronRight className="size-4 opacity-50" />
                </button>
              </li>
            </div>

            <div className="px-2 py-2 border-t border-base-200/50">
              <li>
                <button 
                  onClick={logout} 
                  className="flex items-center justify-between text-error hover:bg-error/10 transition-colors rounded-lg w-full"
                >
                  <div className="flex items-center gap-2">
                    <LogOut className="size-4" />
                    <span>Logout</span>
                  </div>
                  <ChevronRight className="size-4 opacity-50" />
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;