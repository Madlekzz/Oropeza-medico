import { useState } from "react";
import {
  IconCalendarTime,
  IconLogout,
  IconSettings,
  IconStethoscope,
} from "@tabler/icons-react";
import { Code, Group, Image } from "@mantine/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./NavbarSimpleColored.module.css"; // ✅ Correct Import
import { NavLink } from "react-router-dom";

export default function NavbarSimpleColoredPatient() {
  const [active, setActive] = useState("Billing");

  const menuItems = [
    {
      label: "Especialistas",
      icon: <IconStethoscope className={styles.linkIcon} stroke={1.5} />,
      link: "/especialistas",
    },
    {
      label: "Consultas",
      icon: <IconCalendarTime className={styles.linkIcon} stroke={1.5} />,
      link: "/consultas",
    },
    {
      label: "Configuración",
      icon: <IconSettings className={styles.linkIcon} stroke={1.5} />,
      link: "/configuracion",
    },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Header */}
      <div className={styles.navbarMain}>
        <Group className={styles.header} justify="space-between">
          <NavLink to="/dashboard">
            <Image
              src="/src/assets/LOGO BLANCO.png"
              className="w-80 h-12 cursor-pointer"
            />
          </NavLink>
          <Code fw={700} className={styles.version}></Code>
        </Group>

        {/* Navigation Links */}
        {menuItems.map(({ label, icon, link }) => (
          <Link
            key={label}
            to={link} // Use the 'to' prop instead of 'href'
            className={`${styles.link} ${
              active === label ? styles.active : ""
            }`}
            onClick={() => {
              setActive(label); // Set the active state
            }}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <a
          href="#"
          className={styles.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={styles.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
