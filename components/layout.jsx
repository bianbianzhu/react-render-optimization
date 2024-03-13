// components/Layout.js
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const currentDemoNumber = parseInt(router.pathname.split("-")[1]);
  const prevDemoNumber = currentDemoNumber - 1;
  const nextDemoNumber = currentDemoNumber + 1;

  //   create a style object to make the links look nicer, similar to material-ui
  const linkStyle = {
    textDecoration: "none",
    color: "blue",
    marginRight: "10px",
  };

  const demoCount = 3;

  const isOptimized = router.pathname.includes("optimized");

  const links = [
    {
      href: `/demo-${prevDemoNumber}`,
      text: "Previous",
      condition: prevDemoNumber > 0,
    },
    {
      href: `/demo-${currentDemoNumber}-optimized`,
      text: "Optimized",
      condition: !isOptimized,
    },
    {
      href: `/demo-${currentDemoNumber}`,
      text: "Original",
      condition: isOptimized,
    },
    {
      href: `/demo-${nextDemoNumber}`,
      text: "Next",
      condition: nextDemoNumber <= demoCount,
    },
  ];

  return (
    <div>
      {links.map((link, index) => {
        if (link.condition) {
          return (
            <Link key={index} href={link.href}>
              <a style={linkStyle}>{link.text}</a>
            </Link>
          );
        }
      })}
      <hr />
      <div>{children}</div>
    </div>
  );
}
