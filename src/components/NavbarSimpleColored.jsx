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
import styles from "./NavbarSimpleColored.module.css"; // ✅ Correct Import

export default function NavbarSimpleColored() {
  const [active, setActive] = useState("Billing");

  const menuItems = [
    {
      label: "Notifications",
      icon: <IconBellRinging className={styles.linkIcon} stroke={1.5} />,
      link: "/algo",
    },
    {
      label: "Billing",
      icon: <IconReceipt2 className={styles.linkIcon} stroke={1.5} />,
    },
    {
      label: "Security",
      icon: <IconFingerprint className={styles.linkIcon} stroke={1.5} />,
    },
    {
      label: "SSH Keys",
      icon: <IconKey className={styles.linkIcon} stroke={1.5} />,
    },
    {
      label: "Databases",
      icon: <IconDatabaseImport className={styles.linkIcon} stroke={1.5} />,
    },
    {
      label: "Authentication",
      icon: <Icon2fa className={styles.linkIcon} stroke={1.5} />,
    },
    {
      label: "Other Settings",
      icon: <IconSettings className={styles.linkIcon} stroke={1.5} />,
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
        {menuItems.map(({ label, icon }) => (
          <button
            key={label}
            className={`${styles.link} ${
              active === label ? styles.active : ""
            }`}
            onClick={() => setActive(label)}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <button className={styles.link} onClick={(e) => e.preventDefault()}>
          <IconSwitchHorizontal className={styles.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </button>

        <button className={styles.link} onClick={(e) => e.preventDefault()}>
          <IconLogout className={styles.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}
