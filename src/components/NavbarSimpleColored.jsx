import { useState } from "react";
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./NavbarSimpleColored.module.css"; // ✅ Correct Import

export default function NavbarSimpleColored() {
  const [active, setActive] = useState("Billing");

  const menuItems = [
    {
      label: "Notifications",
      icon: <IconBellRinging className={styles.linkIcon} stroke={1.5} />,
      link: "/notifications",
    },
    {
      label: "Billing",
      icon: <IconReceipt2 className={styles.linkIcon} stroke={1.5} />,
      link: "/billing",
    },
    {
      label: "Security",
      icon: <IconFingerprint className={styles.linkIcon} stroke={1.5} />,
      link: "/security",
    },
    {
      label: "SSH Keys",
      icon: <IconKey className={styles.linkIcon} stroke={1.5} />,
      link: "/ssh-keys",
    },
    {
      label: "Databases",
      icon: <IconDatabaseImport className={styles.linkIcon} stroke={1.5} />,
      link: "/databases",
    },
    {
      label: "Authentication",
      icon: <Icon2fa className={styles.linkIcon} stroke={1.5} />,
      link: "/authentication",
    },
    {
      label: "Other Settings",
      icon: <IconSettings className={styles.linkIcon} stroke={1.5} />,
      link: "/other-settings",
    },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Header */}
      <div className={styles.navbarMain}>
        <Group className={styles.header} justify="space-between">
          <Code fw={700} className={styles.version}>
            v3.1.2
          </Code>
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
