import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children, selectedPage, onSetPage }) => {
  return (
    <div style={styles.container}>
      <NavBar onSetPage={onSetPage} selectedPage={selectedPage} />
      <main style={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default Layout;
