import { useState } from "react";
import { AiOutlineRight, AiTwotoneSetting } from "react-icons/ai";
import { FaPen, FaTrash } from "react-icons/fa";
// import Footer from "./components/Footer";
import installer from "../images/installer.png";
export default function Application() {
  const [appAdded, setAppAdded] = useState(false);
  const [editApp, setEditApp] = useState(false);
  return (
    <div className="applications-container">
      <div className="header">
        <div>
          <span className="welcome">Applications </span> Segment your data
        </div>
        <p>
          Applications allow you to Segment your errors by logical grouping like
          deployment or environment
        </p>
      </div>

      <div className="applications-body">
        <div className="adding-area">
          {appAdded ? (
            <div className="display-success-message">
              <p>Application created successfully</p>
              <p className="pointer">x</p>
            </div>
          ) : null}

          <div className="appname-appkey-area">
            <p>Application Name</p> <p>Application key</p>
          </div>

          <div className="search-add-area">
            <div className="inputs">
              <input type="text" placeholder="regno" />
              <input type="text" placeholder="89c41726d84a4a9196042ec2a" />
              <button className="pointer" onClick={() => setAppAdded(true)}>
                Add
              </button>
            </div>

            <div className="buttons">
              <button>Global</button>
              <button>Module</button>
              <button>Legacy</button>
            </div>

            {appAdded ? (
              <div className="app-list">
                <p>regno</p>
                <p className="d-flex" style={{ gap: "5px" }}>
                  89c41726d84a4a9196042ec2a{" "}
                  <AiTwotoneSetting className="green" />
                </p>
                <div className="edit-delete-area">
                  {/* // ONCLICK OF EDIT */}
                  {editApp ? (
                    <div className="clicked-edit">
                      <button className="save-btn">Save</button>
                      <button
                        className="cancel-btn"
                        onClick={() => setEditApp(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <FaPen
                        className="edit-icon "
                        onClick={() => setEditApp(true)}
                      />
                      <FaTrash className="delete-icon " />
                    </>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="snippet">
                  <img src={installer} alt="app snippet" />
                </div>

                <p>
                  You don't have any applications yet <br />
                  Create them to separate your data by code base, environment,
                  or anything that makes sense. <br />
                  Just enter the application name and key in the fields above.
                </p>
              </>
            )}
          </div>

          <div className="step2-buttons">
            <button className="skip-btn">Show My Errors </button>
            <button className="setup-btn">
              Invite Your Team
              <AiOutlineRight className="icon" />
            </button>
          </div>
        </div>

        <div className="description-area">
          <h1>What do I use this for?</h1>
          <p>
            Creating applications allows you to separate error and usage data in
            to logical groups that can have different settings/reports per group{" "}
          </p>

          <h2>Multiple Codebases</h2>
          <p>
            In general you'll probably want to create an application for each
            codebase or web property you want to protect. THis enables you to
            see emerging problems in each app and notify the right people of
            bugs.
          </p>

          <h2>Multple Environments</h2>
          <p>
            If you're monitoring multiple enviroments, you'll probably also want
            to create separate applications per environment (e.g{" "}
            <span className="red">`dev`</span>,{" "}
            <span className="red">`prod`</span>). You wouldn't want to get paged
            at 2AM for a development environment error!
          </p>

          <div className="search-add-area">
            <div className="inputs">
              <input type="text" placeholder="regno" />
              <input type="text" placeholder="89c41726d84a4a9196042ec2a" />
              <button>Add</button>
            </div>

            <div className="app-list">
              <p>Login.Dev</p>
              <p>Login-Dev</p>
              <div className="edit-delete-area">
                <FaPen className="edit-icon" />
                <FaTrash className="delete-icon" />
              </div>
            </div>
            <div className="app-list">
              <p>Login.Dev</p>
              <p>Login-Dev</p>
              <div className="edit-delete-area">
                <FaPen className="edit-icon" />
                <FaTrash className="delete-icon" />
              </div>
            </div>
            <div className="app-list">
              <p>Login.Dev</p>
              <p>Login-Dev</p>
              <div className="edit-delete-area">
                <FaPen className="edit-icon" />
                <FaTrash className="delete-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
