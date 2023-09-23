import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="FooterMainCont">
      <div className="FooterLinkMainCont">
        <a
          href="https://www.instagram.com/suleymanistemihan"
          className="FooterLinkCont"
          target="_blank"
        >
          <img src="/icons/Group.svg" width={52.32} height={51.23} />
        </a>
        <a
          href="https://www.linkedin.com/in/suleymanistemihan/"
          className="FooterLinkCont"
          target="_blank"
        >
          <img src="/icons/Group (1).svg" width={52.32} height={51.23} />
        </a>
        <a
          href="https://twitter.com/Slymnistemihan"
          className="FooterLinkCont"
          target="_blank"
        >
          <img src="/icons/Group (2).svg" width={52.32} height={51.23} />
        </a>
      </div>
      <div>
        <p className="FooterText">
          Üretken insanların tanışıp, proje üretebildiği açık inovasyon merkezi.
        </p>
      </div>
    </div>
  );
}
