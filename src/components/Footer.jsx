const Footer = () => {
  return (
    <footer style={styles.footer}>    
        <div>
          <span>design: S.H. Consultancy Services Ltd</span>
        </div>
        <div>
          <a href="mailto:shconsultancy@hotmail.com" className="hover-underline"><span>email: shconsultancy@hotmail.com</span></a>
        </div>       
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c7ecfff',
    color: '#fff',
    borderRadius: '10px',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
  },
    sectionDivider: {
      width: '80%',
      height: '1px',
      margin: '30 auto',
      background: '#08789a',
    },
  
};

export default Footer;
