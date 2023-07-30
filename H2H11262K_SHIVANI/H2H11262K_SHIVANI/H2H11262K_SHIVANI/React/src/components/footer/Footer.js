import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" style={{ height: 40, width: "100%", alignContent: "bottom"  }}>
      <center><p style={{ margin: "0 30%", color:"black"}}><a href="https://www.highradius.com/privacy-policy/" rel="help" style={{ color: "#2156b6" }}>Privacy Policy.</a>
        | ⓒ {year} HighRadius Corporation. All rights reserved.</p></center>
    </footer>
  );
}

export default Footer;