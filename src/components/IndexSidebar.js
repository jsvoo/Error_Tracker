import { RiDownload2Fill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import Install from "./Install";
import Application from "./Applications";
import { useState } from "react";

export default function IndexSidebar() {
  const [onload, setOnload] = useState({
    install: true,
    application: false,
    team: false,
    ignore: false,
    myErors: false
  });
  const [switcher] = useState({
    ...onload,
    install: false
  });

  return (
    <div className="sidebar-component-container">
      <div className="sidebar">
        <div
          className={
            onload.install === true
              ? "clicked operation pointer"
              : "operation pointer"
          }
          onClick={() => setOnload({ ...switcher, install: true })}
        >
          <center>
            <div>
              <RiDownload2Fill className="icon" />
            </div>
            <p>Install</p>
          </center>
        </div>

        <div
          className={
            onload.application
              ? "clicked operation pointer"
              : "operation pointer"
          }
          onClick={() => {
            setOnload({ ...switcher, application: true });
          }}
        >
          <center>
            <div>
              <MdOutlineDashboardCustomize className="icon" />
            </div>
            <p>Applications</p>
          </center>
        </div>

        <div
          className={
            onload.team ? "clicked operation pointer" : "operation pointer"
          }
          onClick={() => {
            setOnload({ ...switcher, team: true });
          }}
        >
          <center>
            <div>
              <FaUsers className="icon" />
            </div>
            <p>Team</p>
          </center>
        </div>

        <div
          className={
            onload.ignore ? "clicked operation pointer" : "operation pointer"
          }
          onClick={() => {
            setOnload({ ...switcher, ignore: true });
          }}
        >
          <center>
            <div>
              <AiFillEyeInvisible className="icon" />
            </div>
            <p>Ignore</p>
          </center>
        </div>

        <div
          className={
            onload.myErors ? "clicked operation pointer" : "operation pointer"
          }
          onClick={() => {
            setOnload({ ...switcher, myErors: true });
          }}
        >
          <center>
            <div>
              <GoGraph className="icon" />
            </div>
            <p>My Errors</p>
          </center>
        </div>
      </div>

      <div>
        {onload.install ? <Install /> : null}
        {onload.application ? <Application /> : null}
      </div>
    </div>
  );
}
