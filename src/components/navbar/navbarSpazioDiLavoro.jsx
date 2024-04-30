const NavbarSpazioDiLavoro = ({ buttonName, control }) => {
  return (
      <ul
          className={
              !control || buttonName === 'Profilo'
                  ? 'navbar_profilo'
                  : 'navbar_dropdown-content'
          }
      >
          <li className='navbar_creaLi'>Spazio di lavoro</li>
          <li className='navbar_creaLi'>Spazio di lavoro</li>
          <li className='navbar_creaLi'>Spazio di lavoro</li>
      </ul>
  );
};

export default NavbarSpazioDiLavoro