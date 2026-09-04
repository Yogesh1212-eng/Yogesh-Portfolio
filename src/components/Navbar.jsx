import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-name">Yogesh Maurya</div>

      <div className="nav-right">
        <span className="username">@yogeshm</span>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;