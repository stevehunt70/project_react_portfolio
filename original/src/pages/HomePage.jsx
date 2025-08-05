//HomePage.js
import myImg from '../assets/steveh.png';

const HomePage = () => {
    return (
        <main>
            <div style={styles.contentRow}>
                <div className="text-box" style={styles.textBox}>
                    <p>
                        As an experienced consultant with over 28 years of Business Intelligence reporting, IT service and Dashboard presentation,
                        I started my career in accountancy working for a Porsche car garage. This enabled me to get the financial experience 
                        needed for starting in the Financial Reporting world installing, configuring and supporting an application entitled F9.<br /><br />
                        Whilst employed by Vestas Wind Systems (a global alternative energy company providing wind turbines to the energy industry) as a Microsoft
                        Certified IT technician, I was able to develop my IT skills in server and security.<br /><br />
                        I then had the opportunity to run a software application company, a UK based office of a French company in the BI Reporting sector.<br /><br />
                        In 2024 I purchased the UK office and am now diversifying Infineo Solutions Ltd's portfolio, providing web design, database management,
                        SQL programming and Excel training.
                    </p>
                </div>
                <img style={styles.imageRounded} src={myImg} alt="Steve H" />
            </div>
        </main>
    );
};

const styles = {
    contentRow: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '80%',
        margin: '0 auto',
        gap: '50px',
    },
    textBox: {
        flex: 2,
        minWidth: '300px',
    },
    imageRounded: {
        flex: '1',
        minWidth: '150px',
        margin: 'auto',
    },
};

export default HomePage