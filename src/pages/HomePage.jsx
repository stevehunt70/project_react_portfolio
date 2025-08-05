import myImg from '../assets/steveh.jpg';
import watermarkImg from '../assets/logo_watermark.png';

const HomePage = () => {
  return (
    
    <main>
      <div style={styles.wrapper}>
        <div style={styles.wrapperBgd}>
      <div align='center'>          
      <div style={styles.contentRow}>
          <div style={styles.textBox}>
              <p>
                  As an experienced consultant with over 28 years of Business Intelligence reporting, IT service and Dashboard presentation,
                  I started my career in accountancy working for a Porsche car garage. This enabled me to get the financial experience 
                  needed for starting in the Financial Reporting world installing, configuring and supporting an application entitled F9.</p><br />
              <p>Whilst employed by Vestas Wind Systems (a global alternative energy company providing wind turbines to the energy industry) as a Microsoft
                  Certified IT technician, I was able to develop my IT skills in server and security.</p><br />
              <p>I then had the opportunity to run a software application company, a UK based office of a French company in the BI Reporting sector.</p><br />
              <p>In 2024 I purchased the UK office and am now diversifying Infineo Solutions Ltd's portfolio, providing web design, database management,
                  SQL programming and Excel training.</p>              
          </div>
          <div style={styles.imageRounded}>
            <img src={myImg} style={styles.profileImage} />
          </div>                
      </div>
      </div>
      </div>
      </div>
    </main>
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
        minWidth: '300px',
        fontFamily: 'Verdana',
        fontSize: '12px',
        color: 'rgb(9, 67, 124)',
    },
    imageRounded: {
        flex: '1',
        minWidth: '150px',
        margin: 'auto',
    },
    profileImage: {
      width: '200px',
      height: '200px',
      margin: '0 auto',
      border: '2px solid #f99d1b',
      borderRadius: '100%',
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
      display: 'block',
    },
    sectionDivider: {
      width: '80%',
      height: '2px',
      margin: '30 auto',
      background: '#08789a',
    }
};



export default HomePage;
