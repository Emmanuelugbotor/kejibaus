import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiamondIcon from "@mui/icons-material/Diamond";
import DoneIcon from "@mui/icons-material/Done";
import Cause from "../components/Cause";
import Representative from "../components/representative/Representative";
import Contact from "../components/contact/Contact";
import GalleryShow from "../components/gallery/Gallery";
import Topnav from "../components/Topnav/Topnav";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="home">
      <div className="Header">
        <div className="header_top">
          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://facebook.com/kejibaus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/kejibaus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kejibaus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="company_name">Kejibaus</div>
        </div>
        <div className="header_bottom">
          <ul>
            <li className="home">home</li>
            <li>about </li>
            <li>Cause</li>
            <li>Our Team</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>Donate</li>
          </ul>
        </div>
        <Topnav />
      </div>
      <div className="road_map">
        <h1>
          Welcome to <span> kejibaus</span>
        </h1>
        <p>
          We are humanity/ non-profit/ fundraising/ NGO organizations. Our
          humanity activities are taken place around the world,let contribute to
          them with us by your hand to be a better life.
        </p>
        <ul>
          <li>
            <div className="image">
              <img src="/images/about1.jpg" alt="" />
            </div>
            <div className="title_desc">
              <div className="title">
                <div className="icon">
                  <DiamondIcon />
                </div>
                <div className="title_text">Gender Equity</div>
              </div>
              <div className="desc">
                To advocate and promoting the need of gender equality in every
                society and this has produced the right of girls and that of of
                the women in promoting societal balances in several departments
                of life.
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="/images/about1.jpg" alt="" />
            </div>
            <div className="title_desc">
              <div className="title">
                <div className="icon">
                  <DiamondIcon />
                </div>
                <div className="title_text">Child Right</div>
              </div>
              <div className="desc">
                Advocating for right of a child and working closely with the
                parents to educate them the negative effect of child
                malnutrition and that of negligent of child education working
                closely with police community to protect this right
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="/images/about1.jpg" alt="" />
            </div>
            <div className="title_desc">
              <div className="title">
                <div className="icon">
                  <DiamondIcon />
                </div>
                <div className="title_text">Health & Education</div>
              </div>
              <div className="desc">
                To educate the society about HIV/AIDS and other emerging
                diseases as well as addressing stigmatization.
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="/images/about1.jpg" alt="" />
            </div>
            <div className="title_desc">
              <div className="title">
                <div className="icon">
                  <DiamondIcon />
                </div>
                <div className="title_text">Environment Issues</div>
              </div>
              <div className="desc">
                Advocating and creating awareness on the protection of our
                natural environment and getting the youth involved into all
                climate issues and the alternative energy access.
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="/images/about1.jpg" alt="" />
            </div>
            <div className="title_desc">
              <div className="title">
                <div className="icon">
                  <DiamondIcon />
                </div>
                <div className="title_text">Underprivileged persons</div>
              </div>
              <div className="desc">
                Working closely with our partners to put the priorities of the
                needy persons especially the children who are not getting access
                to education and that of aged persons.
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Cause />
      <section className="about">
        <h1>
          ABOUT OUR <span>KEJIBAUS</span>
        </h1>
        <div className="container">
          {/* <div className="one">
            <img src="/images/kejibaus.jpg" alt="" />
          </div> */}
          <div className="two">
            <h2>WHO WE ARE</h2>
            <p>
              The organization was formed in 2005 with brilliant ideas of
              getting The Youth and The young people together as to really be
              the engine room of the society whilist they are useful to
              themselves and contributing the social changes and development to
              the society at large. At Kejibaus Youth Development Initiative,
              our work include but are not limited to environmental, social,
              advocacy and human rights work.
            </p>

            <h2>We work with our partners to</h2>
            <ul>
              <li>
                <DoneIcon className="done" />
                Help eradicate Africa of preventable diseases and zero hunger
              </li>
              <li>
                <DoneIcon className="done" />
                Promote gender equality, addressing socio-economic and health
                concerns of the people in rural areas and other poor communities
              </li>
              <li>
                <DoneIcon className="done" />
                Look after the ageing population, improving the welfare of the
                disadvantaged and nurturing the youth.
              </li>
              <li>
                <DoneIcon className="done" />
                Build sustainable practices to help the environment and
                awareness on climate change
              </li>
              <li>
                <DoneIcon className="done" />
                Educate people about the effects of HIV/AIDS, emerging and
                tropical diseases, and other global health issues. And we
                operating across the states in Nigeria.
              </li>
            </ul>
            <p>
              Since 2012, we have gained the support of people all across the
              world and in particular, the United Nations. Kejibaus Youth
              Development Initiative was granted Special Consultative Status
              with the Economic and Social Council (ECOSOC) of the United
              Nations in 2012. After being nominated as an observer organization
              to the United Nations Framework Convention on Climate Change
              (UNFCCC) 2013 , our vision continues to be fulfilled.
            </p>
          </div>
          <div className="three">
            <h1>INTERNATIONAL AFFILIATED ORGANIZATIONS</h1>
            <ul>
              <li>
                <DoneIcon className="done" />
                United Nations Framework Convention on Climate Change, UNFCCC –
                2013
              </li>
              <li>
                {" "}
                <DoneIcon className="done" /> World Bank Civil Society – 2012
              </li>
              <li>
                {" "}
                <DoneIcon className="done" /> IFY Climate Change Foundation
                Canada – 2019
              </li>
              <li>
                <DoneIcon className="done" /> United Nations Convection to
                Combat Desertification, UNCCD – 2017
              </li>
              <li>
                <DoneIcon className="done" /> The Global Energy Interconnection
                Development and Cooperation Organization, GEIDCO – 2018
              </li>
              <li>
                {" "}
                <DoneIcon className="done" /> Canadian International Global
                Partner – 2017
              </li>
              <li>
                {" "}
                <DoneIcon className="done" /> Africa Development Bank CSO – 2015
              </li>
              <li>
                <DoneIcon className="done" /> The Global Network of Civil
                Society Organisations for Disaster Reduction 2015
              </li>
            </ul>
            <h1>LOCAL AFFILIATED ORGANIZATION​S</h1>
            <ul>
              <li>
                {" "}
                <DoneIcon className="done" /> Federal Ministry of Environment,
                Nigeria – 2017
              </li>
              <li>
                {" "}
                <DoneIcon className="done" /> Diamond Youth Team 2017
              </li>
              <li>
                <DoneIcon className="done" /> Tinws Medical Diagnostics and
                Research Laboratories, EbeLab – 2020
              </li>
              <li>
                {" "}
                <DoneIcon className="done" /> Heorg International – 2019
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Representative />
      <Contact />
      <GalleryShow />
      <Footer />
    </div>
  );
}
