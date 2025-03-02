import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`btn ${theme === "dark" ? "btn-dark" : "btn-light"} d-flex align-items-center p-2 rounded-pill border position-relative`}
      style={{ minWidth: "60px", minHeight: "30px" }}
    >
      <div
        className="rounded-circle bg-white position-absolute shadow d-flex align-items-center justify-content-center"
        style={{
          width: "24px",
          height: "24px",
          left: theme === "dark" ? "calc(100% - 28px)" : "4px",
          transition: "left 0.3s ease",
        }}
      >
        {theme === "dark" ? <Moon className="text-secondary" size={16} /> : <Sun className="text-warning" size={16} />}
      </div>
    </button>
  );
};

export default ThemeSwitch;

// CSS Ekleyin
// .dark-mode {
//   background-color: #343a40 !important;
//   color: white !important;
// }