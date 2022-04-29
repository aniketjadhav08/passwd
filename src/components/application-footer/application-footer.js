import React from "react";
import SiteLogoPng from "../../assets/images/sitelogo/sitelogo.png";
import SiteLogoJp2 from "../../assets/images/sitelogo/sitelogo.jp2";
import SiteLogoJxr from "../../assets/images/sitelogo/sitelogo.jxr";
import SiteLogoWebp from "../../assets/images/sitelogo/sitelogo.webp";
import ImgNextGen from "../img-next-gen/img-next-gen";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import ReactGA from "react-ga";
import "./application-footer.css";

function ApplicationFooter() {
  return (
    <div className="application-footer-root-div">
      <div className="footer-logo">
        <ImgNextGen
          srcWebp={SiteLogoWebp}
          srcJrx={SiteLogoJxr}
          srcJp2={SiteLogoJp2}
          fallback={SiteLogoPng}
          alt="site-logo"
          width={"30%"}
        />
      </div>
      <div className="other-info">
        <div className="github-mention">
          <a
            onClick={() =>
              ReactGA.event({
                category: "ApplicationFooter",
                action: "Clicked on Github",
              })
            }
            href="https://github.com/aniketjadhav08/passwd"
            style={{ color: "inherit" }}
          >
            <GithubOutlined style={{ fontSize: "2rem" }} />
            &nbsp;aniketjadhav08
          </a>
        </div>
        <div className="email-mention">
          <MailOutlined
            style={{ fontSize: "2rem" }}
            onClick={() =>
              ReactGA.event({
                category: "ApplicationFooter",
                action: "Clicked on email",
              })
            }
          />
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
