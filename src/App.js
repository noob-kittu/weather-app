import "./styles.css";

export default function App() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl text-black-900 p-5 font-extrabold tracking-wide font-sans">
        Hello User
      </h1>
      <h2 className="text-black-300 text-lg tracking-wide">
        Enter Your City Name to Get Info about Weather
      </h2>
      <input
        className="border-2 py-2 px-5 my-5 rounded-3xl w-8/12 hover:ring-2"
        type="text"
        placeholder="City Name"
      />
      <div className="information">
        <div className="row flex py-5 ">
          <div className="column bg-black-100 w-4/12 mx-2 border-2 p-5">
            <h1> City Name : Udaipur </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit, maecenas
              ac non bibendum dictumst justo tempus ut, phasellus mattis vel eu
              metus montes.{" "}
            </p>
          </div>
          <div className="column bg-black-100 w-8/12 mx-2 border-2 p-5">
            <h1> City Name : Udaipur </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit, maecenas
              ac non bibendum dictumst justo tempus ut, phasellus mattis vel eu
              metus montes.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
