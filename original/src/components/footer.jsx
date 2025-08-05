const Footer = () => {
  return (
    <footer style={styles.footer}>    
        <span>design: S.H. Consultancy Services Ltd</span>
        <a href="mailto:shconsultancy@hotmail.com" className="hover-underline"><span>email: shconsultancy@hotmail.com</span></a>        
    </footer>
  )
}

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#9ac5f1',
    color: '#fff',
    borderRadius: '10px',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
  },
  
};

export default Footer