import GooeyNav from "./reactbits/GooeyNav/GooeyNav";
import './Header.css';

export default function Header() {

  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Projects", href: "#" },
  ];

  return (
    <>
      <div className="header">
        <div className="gooey_nav">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </>

  );
}