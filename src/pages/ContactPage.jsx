import telImg from '../assets/tel.png';
import formImg from '../assets/form.png';
import emailImg from '../assets/email.png';
import webImg from '../assets/web.png';
import watermarkImg from '../assets/logo_watermark.png';

const ContactPage = () => {
  return (
    <div style={styles.wrapper}>
    <div style={styles.wrapperBgd}>
        <div style={styles.textBox}>
          <h2>Get in Touch</h2>
        </div>
        <div style={styles.contentRowForm}>
          <div style={styles.textBoxForm}>
            <div align="center">
                <div style={styles.contactImage}> <img src={formImg} width='50px' height='50px' /> </div>
                <div style={styles.contactItem}> <span style={styles.span}>contact form</span> </div>
            </div>
            <div align="center" style={styles.formBox}>
              <br />       
              <form action="submit.php" method="post">
                <label><span style={styles.span}><b>Let us know what you would like help with</b></span></label><br /><br />
                <div>
                    <input type="checkbox" name="sqlCB" value="cbSQL" />
                    <label for="sqlCB"><span style={styles.span}>SQL</span></label>

                    <input type="checkbox" name="htmlCB" value="cbHTML" />        
                    <label for="htmlCB"><span style={styles.span}>HTML</span></label>

                    <input type="checkbox" name="cssCB" value="cbCSS" />            
                    <label for="cssCB"><span style={styles.span}>CSS</span></label>

                    <input type="checkbox" name="xlCB" value="cbXL" />            
                    <label for="xlCB"><span style={styles.span}>MS Excel</span></label>
                </div>
                <div>
                    <br />
                    <label for="name"><span style={styles.span}><b>Name </b></span></label>
                    <input type="text" name="name"></input><br /><br />
                    <label for="email"><span style={styles.span}><b>Email </b></span></label>
                    <input type="text" name="email"></input><br /><br />
                    <label for="txtmulti"><span style={styles.span}><b>Message</b></span></label><br />
                    <textarea name="txtmulti" cols="50" rows="8"></textarea><br /><br />
                    <button>submit</button>
                </div>
              </form>
            </div>
          </div>
          <div style={styles.textBoxForm}>
            <br />
            <br />
            <br />
            <br />
            <div style={styles.contactImage}> <img src={telImg} width='50px' height='50px' alt="Phone" /> </div>
            <div style={styles.contactItem}><p><a href="tel:01234567890" style={styles.hoverUnderline}>01234 567890</a></p> </div>
            <br />
            <br />
            <br />
            <div style={styles.contactImage}> <img src={emailImg} width='50px' height='50px' /> </div>
            <div style={styles.contactItem}> <p><a href="mailto:steve@infineo-solutions.co.uk" style={styles.hoverUnderline}>steve@infineo-solutions.co.uk</a></p> </div>
            <br />
            <br />
            <br />
            <div style={styles.contactImage}> <img src={webImg} width='50px' height='50px' alt="Phone" /> </div>
            <div style={styles.contactItem}> <p><a href="http://www.infineo-solutions.co.uk" style={styles.hoverUnderline} target="_blank">www.infineo-solutions.co.uk</a></p> </div>
          </div>                
        </div>
        <br />            
    </div>
    </div>
  );
};

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 0',
    },
    wrapperBgd: {
        width: '80%',
        padding: '30px',  
        backgroundImage: `url(${watermarkImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
    },
    span: {
      fontSize: '14px',
      color: 'rgb(9, 67, 124)',
    },
    contentRow: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyItems: 'center',
        alignItems: 'center',
        textAlign: 'left',
        width: '80%',
        gap: '50px',
        marginTop: '50px',
        marginBottom: '50px',
    },
    textBox: {
        flex: 2,
        justifyContent: 'center',
        textAlign: 'center',
        minWidth: '300px',
        fontFamily: 'Verdana',
        fontSize: '12px',
        color: 'rgb(9, 67, 124)',
    },
    contentRowForm: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80%',
      margin: '0 auto',
      gap: '50px',
    },
    textBoxForm: {
      flex: '2',
      minWidth: '200px',
    },
    contactImage: {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: '8px',      
    }
    ,
    contactItem: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'center',
    },
    formBox: {
      flex: '4',
      minWidth: '200px',
      display: 'block',
    },
    hoverUnderline: {
      color: 'rgb(9, 67, 124)',
      position: 'relative',
      display: 'inline-block',
    },

 }


export default ContactPage;
