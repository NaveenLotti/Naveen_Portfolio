import GooeyNav from "./reactbits/GooeyNav/GooeyNav";
import './Header.css';
import logo from '../assets/Naveen.png'

export default function Header() {

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "https://mail.google.com/mail/?view=cm&to=naveenlotti02@gmail.com" },
  ];

  return (
    <>
    
      <div className="header">
        <div className="logo">
      <img style={{ width: '50px', height: '50px', marginLeft: '70px' }}
        src={logo}
        alt="logo"  
      />
    </div>
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