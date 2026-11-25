import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import "./DashboardLayout.css";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="layout__main">
        <header className="topbar">
          <button
            className="topbar__menu"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
          <span className="topbar__brand">Calabar Homes</span>
        </header>

        <main className="layout__content">{children}</main>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </div>
  );
}