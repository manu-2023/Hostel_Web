import "./homePage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";




function HomeNavBar() {
  useEffect(() => {
    const residentId = localStorage.getItem("residentId");
    if (!residentId) {
      window.location.href = "/404";
    }
  }, []);

  return <div id="Homenavbar"></div>;
}
function FoodImage() {
  return <div id="photo"></div>;
}

function NavItems() {
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("residentname");
    localStorage.removeItem("residentId");
    window.location.href = "/";
  };
  return (
    <div id="Homenavitems">
      <img id="hosteliconnav" src="/FoodIcons/hostel .png" alt="HostelIcon" />
      <h1 id="Homehr">HOSTEL RESIDENT</h1>
      <Link to="/foodqr" id="HomeFood_QR">
        FoodQR
      </Link>
      {/* <a href="#" id="HomeCompalints">
        Complaints
      </a> */}
      <Link to="/residentprofile" id="HomeProfile">
        Profile
      </Link>
      <Link to="/" id="Homelogout" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
}

function MealSelect() {
  const navigate = useNavigate();
  return (
    <div id="ms">
      <p id="Henny_font">Making food choices simpler, every day</p>
      <button id="btn" onClick={() => navigate("/meal-selection")}>
        ..Meal Selection..
      </button>
    </div>
  );
}



function HostelDetails() {
  return (
    <div id="hostdetailsbg">
      <div id="hdtextbox">
        <p id="deatilstext">
          In our hostel, we believe that every meal is more than just food—it's
          a way to create memories, share experiences, and build friendships.
          With our meal management system, choosing your favorite South Indian
          dishes has never been easier. Let us take care of your meals so you
          can focus on enjoying hostel life!
        </p>
      </div>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div id="container">
      <FoodImage />
      <HomeNavBar />
      <NavItems />
      <MealSelect />
      <HostelDetails />
      <div id="wastefood"></div>
      <div id="savefoodtextwrapper">
        <p id="sometextonfoodsave">
          In our hostel, every meal is a chance to make a difference. By being
          mindful of our portions and sharing leftovers, we can significantly
          reduce food wastage. Remember, every bite counts! Let’s work together
          to nourish our community and protect our environment—because when we
          save food, we’re also saving resources and helping those in need. Join
          us in our mission to minimize waste and make every meal matter!
        </p>
        <button id="textunderbtn" onClick={() => navigate("/meal-selection")}>
          ..Meal Selection..
        </button>
      </div>
    </div>
  );
}

export default HomePage;