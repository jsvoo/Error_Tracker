// import { AiTwotoneSetting } from "react-icons/ai";
export default function NoData() {
  return (
    <div className="no-data-component dashboard-body">
      {/* <div className="header">
        <div>
          <h2 className="d-flex gap">
            {" "}
            <AiTwotoneSetting /> Trace is not installed.
          </h2>
          <p>
            Let's install the Trace JavaScript agent in your application. It's
            easy to get started. <br />
            Don't worry, there's lots of options for you to{" "}
            <span className="blue">customize this later.</span>
          </p>
        </div>
        <div>
          <button>Install Now</button>
        </div>
      </div> */}
      <div className="data-section">
        <div className="no-data">
          <h2>We don't have any data!</h2>
          <p>We'll start showing you errors once you install the agent</p>
          <button>Install Now</button>
        </div>
      </div>
    </div>
  );
}
