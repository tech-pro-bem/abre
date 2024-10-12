import Link from "next/link";
import Image from "next/image";
import "./style.css";

export const Header = () => {
  return (
    <header className="container-header">
      <div className="wrapper container-header_mobile">
        <div className="logo_mobile">
          <Image
            src="/logo/logo.svg"
            alt="logo"
            width={148}
            height={34}
          />
        </div>
        <button className="button-header_mobile">Acessar materiais</button>
      </div>
      <nav className="container-navbar_mobile">
        <ul className="navbar_mobile">
          <li className="custom-link_mobile">
            <Link href="/">Conheça</Link>
          </li>
          <li className="custom-link_mobile">
            <Link href="/">Projetos</Link>
          </li>
          <li className="custom-link_mobile">
            <Link href="/">Contato</Link>
          </li>
          <li className="custom-link_mobile">
            <Link href="/">Esquizofrenia</Link>
          </li>
        </ul>
      </nav>

      <div className="container-header_desktop">
        <div className="logo_desktop">
          <a
            href="/"
            target="_self"
          >
            <Image
              src="/logo/logo.svg"
              alt="logo"
              width={176}
              height={41}
            />
          </a>
        </div>
        <nav className="navbar-container_desktop">
          <ul className="navbar_desktop">
            <li className="custom-link_desktop">
              <Link href="/">Conheça</Link>
            </li>
            <li className="custom-link_desktop">
              <Link href="/">Projetos</Link>
            </li>
            <li className="custom-link_desktop">
              <Link href="/">Contato</Link>
            </li>
            <li className="custom-link_desktop">
              <Link href="/">Esquizofrenia</Link>
            </li>
          </ul>
        </nav>
        <div className="button-container_desktop">
          <button className="button-header_desktop">Materiais complementares</button>
        </div>
        <div className="icons-header_desktop">
          <a
            href="https://www.facebook.com/abre.esquizofrenia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/tdesign_logo-facebook.svg"
              alt="icone do Facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/abreesquizofrenia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/tdesign_logo-instagram.svg"
              alt="icone do Instagram"
              width={23}
              height={24}
            />
          </a>
          <a
            href="https://www.youtube.com/@abrebrasil2014"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/tdesign_logo-youtube.svg"
              alt="icone do Youtube"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </header>
  );
};
