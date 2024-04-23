import "./navbar.css"
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <div className="leftNav">
          {/* <img src="https://www.reshot.com/preview-assets/icons/GV5NA8JMXS/solar-system-GV5NA8JMXS.svg" /> */}
          <button>Spazi di lavoro</button>
          <button>Recenti</button>
          <button>Preferita</button>
          <button className="buttonSpecial">Crea</button>
        </div>

        <div className="rightNav">
          <input type="text" placeholder="Cerca" />
          <button className="buttonSpecial" id="notification">
          <span>
            <IoMdNotifications />
          </span>
          </button>
          <button>Profilo</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;