import Link from "next/link";
import Image from "next/image";
import "./style.css";
import "../styles/theme.css";

export const Header = () => {
  return (
    <>
      <header className="container-header">
        <div className="wrapper container-header_wrapper">
          {/* Versão Móvel */}
          <div className="logo_movel">
            <Image
              src="/logo/logo.svg"
              alt="logo"
              width={148}
              height={34}
            />
          </div>
          <div className="button_container">
            <button className="button-header_movel">Acessar materiais</button>
          </div>
        </div>
        <nav className="navbar">
          <Link
            href="/"
            className="custom-link"
          >
            Conheça
          </Link>
          <Link
            href="/"
            className="custom-link"
          >
            Projetos
          </Link>
          <Link
            href="/"
            className="custom-link"
          >
            Contato
          </Link>
          <Link
            href="/"
            className="custom-link"
          >
            Esquizofrenia
          </Link>
        </nav>

        {/* Versão Desktop */}

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
          <nav className="navbar_desktop">
            <Link
              href="/conheca"
              className="custom-link_desktop"
            >
              Conheça
            </Link>
            <Link
              href="/projetos"
              className="custom-link_desktop"
            >
              Projetos
            </Link>
            <Link
              href="/contato"
              className="custom-link_desktop"
            >
              Contato
            </Link>
            <Link
              href="/esquizofrenia"
              className="custom-link_desktop"
            >
              Esquizofrenia
            </Link>
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
    </>
  );
};
