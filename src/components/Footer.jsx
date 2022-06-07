import React from "react";

import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function Footer() {
  return (
    <footer>
      {/* <div className="logo">
        <span>
          <div className="icon">
            <DirectionsCarFilledIcon />
          </div>
          <span>greenCar</span>
          <span>autocare</span>
        </span>
      </div>
      <p>
        Etiam consequat sem ullamcorper, euismod metus sit amet, tristique
        justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo
      </p> */}
      <ul>
        <li>
          <div className="icon">
            <LocalPhoneIcon />
          </div>
          <h2>(+234) 705 142 3895</h2>
          <h2>(+234) 809 439 6178</h2>
        </li>
        <li>
          <div className="icon">
            <LocationOnIcon />
          </div>
          <h2>KEJIBAUS (HQTR)</h2>
          <p> NO. 15 Alakure Street, Akure. Ondo State. Nigeria</p>
        </li>
        <li>
          <div className="icon">
            <EmailIcon />
          </div>
          <p> president@kejibause.org</p>
          <p>nigeria@kejibaus.org</p>
          <p>kejibaus@yahoo.com</p>
        </li>
        <li>
          <div className="icon">
            <AccessTimeIcon />
          </div>

          <p>We are available round the clock</p>
        </li>
      </ul>
      <div className="copyright">
        <p>
          <span>Kejibaus </span>© All Rights Reserved - 2022
        </p>
      </div>
    </footer>
  );
}
