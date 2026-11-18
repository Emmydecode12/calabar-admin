import "./Sidebar.css";

import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  MessageSquare,
  Wallet,
  TrendingUp,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Users", icon: Users },
  { label: "Properties", icon: Building2 },
  { label: "Reports", icon: FileText },
  { label: "Enquiries", icon: MessageSquare },
  { label: "Revenue", icon: Wallet },
  { label: "Analytics", icon: TrendingUp },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__brand">
        <h1>Calabar Homes</h1>
        <p>Platform Admin</p>
      </div>

      <nav>
        <ul className="sidebar__list">
          {navItems.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a href="#" className="sidebar__link" onClick={onClose}>
                <Icon size={18} />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}