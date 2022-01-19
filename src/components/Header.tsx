import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1>GIF Sifter</h1>
      <p className="attribution">
        Powered By{" "}
        <a
          href="https://developers.giphy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GIPHY
        </a>
      </p>
    </div>
  );
}

export default Header;
