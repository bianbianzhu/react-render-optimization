import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* generate a list of nextjs links to pages demo-1, demo-2, through demo-5 */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/demo-1"
            style={{ textDecoration: "none", color: "blue" }}
          >
            demo-1 - Reconciliation [before]
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/demo-1-after"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Reconciliation [after]
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/demo-2"
            style={{ textDecoration: "none", color: "blue" }}
          >
            demo-2
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/demo-3"
            style={{ textDecoration: "none", color: "blue" }}
          >
            demo-3
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/demo-4"
            style={{ textDecoration: "none", color: "blue" }}
          >
            demo-4
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/demo-5"
            style={{ textDecoration: "none", color: "blue" }}
          >
            demo-5
          </Link>
        </li>
      </ul>
    </div>
  );
}
