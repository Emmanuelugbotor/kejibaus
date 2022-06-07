import CallIcon from "@mui/icons-material/Call";
import NearMeIcon from "@mui/icons-material/NearMe";
import MailIcon from "@mui/icons-material/Mail";
export default function Contact() {
  return (
    <div className="message" id="contact">
      <div className="left">
        <h1>
          SEND YOUR <span> MESSAGE</span>
        </h1>
        <div className="form_wrapper">
          <form action="">
            <div className="input_wrapper">
              <input type="text" placeholder="name" />
              <input type="text" name="" id="" placeholder="phone number" />
            </div>
            <input type="email" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Subject / Title" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message here..."
            ></textarea>
            <button className="btn">
              <span>Send Request</span>
            </button>
          </form>
        </div>
      </div>
      <div className="right">
        <h1>
          QUICK <span>CONTACT</span>
        </h1>
        <div className="quick_wrapper">
          <p>
            If you are passionate about helping people: through education then
            you are in the right place.
          </p>
          <div className="details_location">
            <ul>
              <h1>HeadQuater</h1>
              <li>
                <NearMeIcon className="icon" />
                <p>
                  <span>Address:</span> NO. 15 Alakure Street, Akure. Ondo
                  State. Nigeria
                </p>
              </li>
              <li>
                <CallIcon className="icon" />
                <p>
                  <span>Phone:</span>(+234) 809 439 6178, 705 142 3895
                </p>
              </li>
              <li>
                <MailIcon className="icon" />
                <p>
                  <span>Email:</span>president@kejibause.org,
                  nigeria@kejibaus.org, kejibaus@yahoo.com
                </p>
              </li>
            </ul>
            <ul>
              <h1>International Address</h1>
              <li>
                <NearMeIcon className="icon" />
                <p>
                  <span>Address:</span>Kejibaus Youth Development Initiative
                  INC.(DOS ID: 11207) 28, Vermont Str, Brooklyn New York. 11207.
                  UNITED STATES.
                </p>
              </li>
              <li>
                <MailIcon className="icon" />
                <p>
                  <span>Email:</span>usa@kejibause.org
                </p>
              </li>
            </ul>
            <ul>
              <h1>International Address</h1>
              <li>
                <NearMeIcon className="icon" />
                <p>
                  <span>Address:</span>Kejibaus Youth Development Initiative
                  FRANCE. 31, RUE-JEAN BOUIN CHATILLION 92320. FRANCE
                </p>
              </li>
              <li>
                <MailIcon className="icon" />
                <p>
                  <span>Email:</span>france@kejibaus.org
                </p>
              </li>
            </ul>
            <ul>
              <h1>International Address</h1>
              <li>
                <NearMeIcon className="icon" />
                <p>
                  <span>Address:</span>Kejibaus Youth Development Initiative
                  Swaziland(The kingdom Eswatini) 4, Maltcare Building, plot
                  195, MSHAYASAFE MATSAPHA.
                </p>
              </li>
              <li>
                <MailIcon className="icon" />
                <p>
                  <span>Email:</span>eswatini@kejibaus.org
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
