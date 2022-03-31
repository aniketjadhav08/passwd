import React from "react";
import SiteLogo from "../../assets/images/sitelogo.png";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import "./application-footer.css";

function ApplicationFooter() {
  return (
    <div className="application-footer-root-div">
      <div className="footer-logo">
        <img src={SiteLogo} alt="site-logo" width={"30%"} />
      </div>
      <div className="other-info">
        <div className="github-mention">
          <a
            href="https://github.com/aniketjadhav08/passwd"
            style={{ color: "inherit" }}
          >
            <GithubOutlined style={{ fontSize: "2rem" }} />
            &nbsp;aniketjadhav08
          </a>
        </div>
        <div className="email-mention">
          <MailOutlined style={{ fontSize: "2rem" }} />
          &nbsp;ani.jad.08@gmail.com
        </div>
        <div className="illustration-mention">
          Illustration by{" "}
          <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
            Icons 8
          </a>{" "}
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
    </div>
  );
}

export default ApplicationFooter;
