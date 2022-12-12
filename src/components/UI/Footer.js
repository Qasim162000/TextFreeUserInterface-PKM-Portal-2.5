import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light">
      <div
        className="text-center p-3 text-white"
        style={{ backgroundColor: "rgb(23 43 81 / 1)" }}
      >
        © 2020 Copyright: &nbsp;
        <a className="text-white" href="https://maverickphp.com">
          Maverickphp.com
        </a>
        &nbsp; - &nbsp;
        <a className="text-white" href="https://www.devnigma.com">
          Devnigma.com
        </a>
      </div>
    </footer>
  );
}
