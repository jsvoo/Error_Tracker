import { BsInputCursor } from "react-icons/bs";
import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

export default function ErrorLog() {
  return (
    <div className="errorLog">
      <div className="error-sectionA">
        <div className="error-type">
          <button>
            {" "}
            <FaExclamationTriangle /> Console Error
          </button>
          <div className="message">
            <h5>
              Message:{" "}
              <span className="red">
                {" "}
                Cannot read properties "length" of undefined
              </span>
            </h5>
            <p>
              <b>Type:</b> Error in Console <FaInfoCircle />
            </p>
          </div>
        </div>

        <div className=" severity-section">
          <button> &gt;- Console </button>
          <div className="message">
            <h5>
              Severity: <span className="orange"> ERROR</span>
            </h5>
            <p className="error-message-body">
              <b>Message:</b>&#123;{" "}
              <span className="red">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>{" "}
              &#125;
            </p>
          </div>
        </div>

        <div className=" user-input everity-section">
          <button>
            {" "}
            <BsInputCursor /> User Input{" "}
          </button>
          <div className="message">
            <h5>Value: 0 empty character(s)</h5>
            <p className="error-message-body">
              <b>Element:</b>
            </p>
          </div>
        </div>
      </div>

      <div className="error-sectionB">
        <div className="sourcemap">
          <p>Sourcemap Support</p>
          <p className="green">ON</p>
        </div>

        <div className="length">
          <p>
            <b>Length </b>
          </p>
        </div>

        <div className="length">
          <p>
            <b>renderVisitorEvent </b>
          </p>
        </div>
      </div>
    </div>
  );
}
