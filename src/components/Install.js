import { RiDownload2Fill } from "react-icons/ri";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillWarning,
  AiFillBug
} from "react-icons/ai";
import installer from "../images/installer.png";
import tracker from "../images/tracker.png";
import fixer from "../images/fixer.png";
import Footer from "./Footer";
export default function Install() {
  return (
    <div className="installContainer">
      <div className="install-body">
        <div className="header">
          <div>
            <span className="welcome">Welcome! </span> Let's fix some errors
          </div>
          <p>Let's install the agent in your application</p>
        </div>

        <div className="installation-steps">
          <div className="sectionA">
            <h2>
              1. Install the Trace Agent <RiDownload2Fill className="icon" />
            </h2>
            <p>
              The Trace agent gets installed on your site. Paste this snippet
              into your HTML as the first{" "}
              <span className="script">
                `<AiOutlineLeft />
                <span className="d">script</span>
                <AiOutlineRight />`
              </span>
              on the page.
            </p>

            <div className="snippet-area">
              <div className="buttons">
                <button>Global</button>
                <button>Mobile</button>
                <button>Legacy</button>
              </div>
              <div className="snippet">
                <img src={installer} alt="installer snippet" />
              </div>

              <p>
                Looking for other ways to include or bundle the agent? <br />
                Check{" "}
                <button target="_blank">
                  our installation documentation
                </button>{" "}
                for more ways to install.
              </p>
            </div>

            <div className="step-3">
              <h2>
                3. Check the Install <AiFillWarning className="icon" />
              </h2>
              <p>We haven't traced any errors yet.</p>
              <button>Check Now</button>
            </div>
          </div>

          <div className="sectionB">
            <h2>
              2. Trace an Error <AiFillBug className="icon" />
            </h2>
            <p className="">
              <button className="link">
                The agent logs errors automatically,
              </button>{" "}
              but to verify it's working, let's try it manually. You can track
              an error from anywhere in your application, or in your developer
              console.
            </p>

            <div className="snippet-area">
              <div className="buttons">
                <button>Global</button>
                <button>Mobile</button>
                <button>Legacy</button>
              </div>
              <div className="snippet">
                <img src={tracker} alt="installer snippet" />
              </div>
            </div>

            <div className="fixer-image">
              <img src={fixer} alt="Error finder" />
            </div>
            <div className="step2-buttons">
              <button className="skip-btn">Skip to My Errors </button>
              <button className="setup-btn">
                Setup Application
                <AiOutlineRight className="icon" />
              </button>
            </div>

            <div className="step-3 mobile-step-3">
              <h2>
                3. Check the Install <AiFillWarning className="icon" />
              </h2>
              <p>We haven't traced any errors yet.</p>
              <button>Check Now</button>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
