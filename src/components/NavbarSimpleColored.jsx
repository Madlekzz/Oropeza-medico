import { useState } from "react";
import {
  Icon2fa,
  IconCalendarTime,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUserHeart,
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./NavbarSimpleColored.module.css"; // ✅ Correct Import

export default function NavbarSimpleColored() {
  const [active, setActive] = useState("Billing");

  const menuItems = [
    {
      label: "Pacientes",
      icon: <IconUserHeart className={styles.linkIcon} stroke={1.5} />,
      link: "/pacientes",
    },
    {
      label: "Consultas",
      icon: <IconCalendarTime className={styles.linkIcon} stroke={1.5} />,
      link: "/consultas",
    },
    {
      label: "Configuración",
      icon: <IconSettings className={styles.linkIcon} stroke={1.5} />,
      link: "/configuración",
    },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Header */}
      <div className={styles.navbarMain}>
        <Group className={styles.header} justify="space-between">
          <h1 className="text-center text-white text-2xl">Medidev</h1>
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
          <IconSwitchHorizontal className={styles.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

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
