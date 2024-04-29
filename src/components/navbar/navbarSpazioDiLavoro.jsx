const NavbarSpazioDiLavoro = ({ buttonName, control }) => {
  return (
      <ul
          className={
              !control || buttonName === 'Profilo'
                  ? 'navbar_profilo'
                  : 'navbar_dropdown-content'
          }
      >
          <li>Spazio di lavoro</li>
          <li>Spazio di lavoro</li>
          <li>Spazio di lavoro</li>
      </ul>
  );
};

export default NavbarSpazioDiLavoro