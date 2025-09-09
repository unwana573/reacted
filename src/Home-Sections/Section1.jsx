import deliveryguy from "../assets/delivery-guy.png";
import "./section1.css";

function Section1() {
  return (
    <>
    <ul className="section1 container-fluid">
      <li >
        <h1>Present Your Healthful <br /> Restaurant Food</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='btn btn-danger'>Read more</button>
      </li>
      <li>
        <img src={deliveryguy} alt="Delivery guy" />
      </li>
    </ul>
    </>
  );
}

export default Section1;