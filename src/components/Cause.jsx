import data from "./data";
import Underline from "./Underline";
export default function Cause() {
  return (
    <section className="cause">
      <h1>CAUSES/PROJECTS</h1>
      <Underline />
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <img src={item.image} alt="" />
              <div className="content">
                <button>Learn more</button>
              </div>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
