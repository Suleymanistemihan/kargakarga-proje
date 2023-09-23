import "../styles/NavBar.css";
import Image from "next/image";

export default function NavBar() {
  return (
      <div className="NavBarCont">
        <div>
          <Image src="/icons/kargakarga.svg" width={276} height={51} />
          <Image src="/icons/karga.svg" width={75} height={60} />
        </div>
        <div>
          <ul className="NavButtonCont">
            <li className="NavButtons">Projects</li>
            <li className="NavButtons">Services</li>
            <li className="NavButtons">About us</li>
            <li className="NavButtons">Contact us</li>
            <li className="NavButtons2">Start a Project</li>
          </ul>
        </div>
    </div>
  );
}
