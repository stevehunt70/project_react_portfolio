import myImg from '../assets/logo_dot.png';

const NavBar = ({ onSetPage, selectedPage }) => {
  return (
    <nav style={styles.navbar}>
      <img
        src={myImg}
        alt="Logo"
        style={styles.logo}
      />

      <div style={styles.navLinks}>
        <NavButton label="Home" pageKey="home" onSetPage={onSetPage} selectedPage={selectedPage} />
        <span style={styles.separator}>|</span>
        <NavButton label="About" pageKey="about" onSetPage={onSetPage} selectedPage={selectedPage} />
        <span style={styles.separator}>|</span>
        <NavButton label="Contact" pageKey="contact" onSetPage={onSetPage} selectedPage={selectedPage} />
      </div>
    </nav>
  );
};

const NavButton = ({ label, pageKey, onSetPage, selectedPage }) => (
  <button
    onClick={() => onSetPage(pageKey)}
    style={{
      ...styles.link,
      ...(selectedPage === pageKey ? styles.selected : {}),
    }}
  >
    {label}
  </button>
);

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ccc',
    padding: '10px 20px',
    width: '100%',
    boxSizing: 'border-box',
  },
  logo: {
    width: '30px',
    height: '30px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  link: {
    background: 'none',
    border: 'none',
    color: '#08789a',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '5px 10px',
  },
  selected: {
    color: '#f99d1b',
    textDecoration: 'underline',
  },
  separator: {
    color: '#ccc',
    fontWeight: 'bold',
  },
};

export default NavBar;
