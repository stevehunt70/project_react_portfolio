import logoImg from '../assets/logo_sph.png'

const NavBar = ({ onSetPage, selectedPage }) => {
  return (
    <div>
      <hr style={styles.sectionDivider}></hr>
      <div style={styles.menu}>
        <img src={logoImg} width='60px' height='60px' />
        <nav style={styles.navbar}>
          <NavButton label="Home" pageKey="home" onSetPage={onSetPage} selectedPage={selectedPage} />
          <NavButton label="Web Design" pageKey="web" onSetPage={onSetPage} selectedPage={selectedPage} />
          <NavButton label="Contact" pageKey="contact" onSetPage={onSetPage} selectedPage={selectedPage} />
        </nav>
      </div>
      <hr style={styles.sectionDivider}></hr>
    </div>
  );
};

const NavButton = ({ label, pageKey, onSetPage, selectedPage }) => (
  <button
    onClick={() => onSetPage(pageKey)}
    style={{
      ...styles.button,
      ...(selectedPage === pageKey ? styles.selected : {}),
    }}
  >
    {label}
  </button>
);

const styles = {
  menu: {
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'center',
    textAlign: 'center',
    top: '0',
  },
    sectionDivider: {
      width: '80%',
      height: '1px',
      margin: '30 auto',
      background: '#08789a',
    },
  navbar: {
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'space-around',
    textAlign: 'center',
    width: '60%',
    gap: '10px',
    padding: '10px',
  },
  button: {
    fontFamily: 'Verdana',
    padding: '8px 12px',
    borderTop: '1px solid #08789a',
    borderBottom: '1px solid #08789a',
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: '6px',
    background: '#fff',
    cursor: 'pointer',
  },
  selected: {
    borderTop: '1px solid #f99d1b',
    borderBottom: '1px solid #f99d1b',
    borderLeft: 'none',
    borderRight: 'none',
    backgroundColor: '#ddd',
  },
};

export default NavBar;
