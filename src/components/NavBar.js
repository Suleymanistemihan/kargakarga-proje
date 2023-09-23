import "../styles/NavBar.css";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="NavBarCont">
      <div>
        <a href="/">
          <Image src="/icons/kargakarga.svg" width={276} height={51} />
          <Image src="/icons/karga.svg" width={75} height={60} />
        </a>
      </div>
      <div>
        <ul className="NavButtonCont">
          <a href="/ProjectsScreen" className="NavButtons">
            Projects
          </a>
          <a href="/ServicesScreen" className="NavButtons">
            Services
          </a>
          <a href="/About_Us" className="NavButtons">
            About us
          </a>
          <a href="/Contact_Us" className="NavButtons">
            Contact us
          </a>
          <a href="/StartProjectScreen" className="NavButtons2">
            Start a Project
          </a>
        </ul>
      </div>
    </div>
  );
}
