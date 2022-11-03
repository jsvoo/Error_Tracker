import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  AiFillDashboard,
  AiFillStar,
  AiFillCaretDown,
  AiOutlineClockCircle,
  AiTwotoneSetting
} from "react-icons/ai";
import {
  FaChrome,
  FaFilter,
  FaLink,
  FaShareAlt,
  FaTools,
  FaUsers
} from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { GoClock, GoRepoForked } from "react-icons/go";
import {
  BsBarChartFill,
  BsCheckCircleFill,
  BsFillExclamationTriangleFill
} from "react-icons/bs";
import { useState } from "react";
import NoData from "./NoData";
export default function Dashboard() {
  const [clicked, setClicked] = useState({
    application: false,
    status: false
  });
  const [onload, setOnload] = useState({
    dashboard: true,
    errors: false,
    recent: false,
    urls: false,
    browsers: false,
    users: false,
    versions: false,
    metadata: false,
    trends: false,
    saved: false,
    settings: false
  });
  const [switcher] = useState({
    ...onload,
    dashboard: false
  });
  return (
    <div>
      <div className="secondaryNavigation">
        <div
          className="item-opened equal-height pointer"
          onClick={() =>
            setClicked({ ...clicked, application: !clicked.application })
          }
        >
          <div className="item-icon">
            <MdOutlineDashboardCustomize className="icon" />
          </div>
          <div>
            <p>APPLICATION</p>
            <h5>
              All <AiFillCaretDown />
            </h5>
          </div>
        </div>

        <div className="status-section item-opened equal-height">
          <div className="item-icon">
            <BsCheckCircleFill className="ico" />
          </div>
          <div>
            <p>STATUS</p>
            <h5>
              All <AiFillCaretDown />
            </h5>
          </div>
        </div>

        <div className="custom-filters-section equal-height">
          <div className="input">
            <FaFilter />
            <input type="text" placeholder="Add Custom Filters" />
          </div>
        </div>

        <div className="time-section equal-height">
          <p>
            <AiOutlineClockCircle />
          </p>
          <p>1H</p>
          <p>8H</p>
          <p className="blue">24H</p>
          <p>3D</p>
          <p>7D</p>
          <p>ALL</p>
          <p>Custom</p>
        </div>

        <div className="share-section equal-height">
          <p>
            {" "}
            <FaShareAlt />
          </p>
        </div>
      </div>

      <div className="on-mobile">
        <div className="mobile-custom-filters-section mobile-show equal-height">
          <div className="input">
            <FaFilter />
            <input type="text" placeholder="Add Custom Filters" />
          </div>
        </div>

        <div className="mobile-time-section equal-height">
          <p>
            <AiOutlineClockCircle />
          </p>
          <p>1H</p>
          <p>8H</p>
          <p className="blue">24H</p>
          <p>3D</p>
          <p>7D</p>
          <p>ALL</p>
          <p>Custom</p>
        </div>
      </div>

      <div className="sidebar-component-container">
        <div className="sidebar">
          <div
            className={
              onload.dashboard
                ? "clicked operation pointer"
                : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, dashboard: true })}
          >
            <center>
              <div>
                <AiFillDashboard className="icon" />
              </div>
              <p>Dashboard</p>
            </center>
          </div>

          <div
            className={
              onload.errors ? "clicked operation pointer" : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, errors: true })}
          >
            <center>
              <div>
                <BsFillExclamationTriangleFill className="icon" />
              </div>
              <p>Errors</p>
            </center>
          </div>

          <div
            className={
              onload.recent ? "clicked operation pointer" : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, recent: true })}
          >
            <center>
              <div>
                <GoClock className="icon" />
              </div>
              <p>Recent</p>
            </center>
          </div>

          <div
            className={
              onload.urls ? "clicked operation pointer" : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, urls: true })}
          >
            <center>
              <div>
                <FaLink className="icon" />
              </div>
              <p>Urls</p>
            </center>
          </div>

          <div
            className={
              onload.browsers
                ? "clicked operation pointer"
                : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, browsers: true })}
          >
            <center>
              <div>
                <FaChrome className="icon" />
              </div>
              <p>Browsers</p>
            </center>
          </div>

          <div
            className={
              onload.users ? "clicked operation pointer" : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, users: true })}
          >
            <center>
              <div>
                <FaUsers className="icon" />
              </div>
              <p>Users</p>
            </center>
          </div>

          <div
            className={
              onload.versions
                ? "clicked operation pointer"
                : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, versions: true })}
          >
            <center>
              <div>
                <GoRepoForked className="icon" />
              </div>
              <p>Versions</p>
            </center>
          </div>

          <div
            className={
              onload.metadata
                ? "clicked operation pointer"
                : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, metadata: true })}
          >
            <center>
              <div>
                <BiCoinStack className="icon" />
              </div>
              <p>Metadata</p>
            </center>
          </div>

          <div
            className={
              onload.trends ? "clicked operation pointer" : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, trends: true })}
          >
            <center>
              <div>
                <BsBarChartFill className="icon" />
              </div>
              <p>Trends</p>
            </center>
          </div>

          <div
            className={
              onload.saved ? "clicked operation pointer" : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, saved: true })}
          >
            <center>
              <div>
                <AiFillStar className="icon" />
              </div>
              <p>Saved</p>
            </center>
          </div>

          <div
            className={
              onload.settings
                ? "clicked operation pointer"
                : "pointer operation"
            }
            onClick={() => setOnload({ ...switcher, settings: true })}
          >
            <center>
              <div>
                <FaTools className="icon" />
              </div>
              <p>Settings</p>
            </center>
          </div>
        </div>

        <div className="dashboard-body">
          {clicked.application ? (
            <div className="dropdown-app-list">
              <div className="show-all">Show ALL</div>
              <p className="application">regno</p>
              <p className="application-setting">Application Settings</p>
            </div>
          ) : null}

          {/* <NoData/> */}
          <div className="header">
            <div>
              <h2 className="d-flex gap">
                {" "}
                <AiTwotoneSetting /> Trace is not installed.
              </h2>
              <p>
                Let's install the Trace JavaScript agent in your application.
                It's easy to get started. <br />
                Don't worry, there's lots of options for you to{" "}
                <span className="blue">customize this later.</span>
              </p>
            </div>
            <div>
              <button>Install Now</button>
            </div>
          </div>
          <div className="data-section">
            <NoData />
          </div>
        </div>
      </div>
    </div>
  );
}
