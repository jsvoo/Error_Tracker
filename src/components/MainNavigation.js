import "../myStyles.scss";
import user_img from "../images/userImg.jpg";
import {
  RiFileForbidFill,
  RiSearchLine,
  RiArrowDownSFill
} from "react-icons/ri";
export default function MainNavigation() {
  return (
    <nav className="d-flex">
      <div className="logo-area">
        <RiFileForbidFill className="logo" />
      </div>

      <div className="profile-search-area d-flex">
        <div className="search-area">
          <RiSearchLine className="search" />
        </div>

        <div className="profile-area d-flex">
          <div className="profile-text">
            <h5>
              ANESTIN JAMES <RiArrowDownSFill />
            </h5>
            <p>adelus</p>
          </div>

          <div className="profile-picture">
            <img src={user_img} alt="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
}
