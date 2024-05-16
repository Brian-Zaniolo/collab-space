import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import NavbarCrea from './navbarCrea';
import NavbarProfilo from "./navbarProfilo";
import NavbarSpazioDiLavoro from "./navbarSpazioDiLavoro";
import "./navbarButtonDropDown.css"
import NavbarNotification from "./navbarNotification";

const NavbarButtonDropDown = ({ buttonName, control }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const ref = useRef();

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              setIsVisible(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
  }, [ref]);

  return (
      <>
          <div className="navbar_dropdown" ref={ref}>
              <button
                  onClick={handleVisibility}
                  className={
                      !control
                          ? 'navbar_notification'
                          : 'buttonDefault'
                  }
                  id={
                      !control || buttonName === 'Crea'
                          ? 'navbar_buttonSpecial'
                          : undefined
                  }
              >
                  {control ? (
                      <>
                          {buttonName}{' '}
                          {buttonName !== 'Crea' &&
                              buttonName !== 'Profilo' && (
                                  <span className="navbar_dropDownMenu">
                                      <FaAngleDown className="navbar_markdown" />
                                  </span>
                              )}{' '}
                      </>
                  ) : (
                      <>
                          <span style={{marginLeft: '-3.5px'}}>
                              <IoMdNotifications />
                          </span>
                      </>
                  )}
              </button>
              {isVisible ? (
                  buttonName === 'Profilo' ? (
                      <NavbarProfilo />
                  ) : buttonName === 'Crea' ? (
              <NavbarCrea close={handleVisibility} />
                  ) : !control ?  (
                    <NavbarNotification />
                  ) :(
                      <NavbarSpazioDiLavoro
                          buttonName={buttonName}
                          control={control}
                      />
                  )
              ) : null}
          </div>
      </>
  );
};

export default NavbarButtonDropDown