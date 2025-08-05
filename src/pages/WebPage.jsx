import watermarkImg from '../assets/logo_watermark.png';
import webImg from '../assets/web.png';

const WebPage = () => {
  return (
    <div style={styles.wrapper}>    
        <div style={styles.wrapperBgd}>            
            <h2>Web Design Projects</h2>

            <div>
            <p>Portfolio Project</p>
            <p>Using normmal html and css scripting </p>
            <a href="https://stevehunt70.github.io/project_portfolio/">Portfolio Project</a>
            </div>

            <div>
            <p>Portfolio multi-page website Project</p>
            <p>Using normmal html and css scripting create a multi-page website </p>
            <a href="https://stevehunt70.github.io/project_multiPage/">Multi-page Website</a>
            </div>

            <div>
            <p>Convert the multi-page website using Bootstrap grid</p>
            <p>Using normmal html and css scripting </p>
            <a href="https://stevehunt70.github.io/project_using_bootstrap_grid/">Using Bootstrap</a>
            </div>

            <div>
            <p>Interactive To Do list</p>
            <p>Create an Interactive To Do list</p>
            <a href="https://stevehunt70.github.io/project_interactive_todo_list/">Interactive 'To Do List' Web App</a>
            </div>

            <div>
            <p>5 Day Weather Forecast Web App </p>
            <p>Creation of a 5 day weather forecast app using an API to a weather forecast database</p>
            <a href="https://stevehunt70.github.io/project_weather_report/">Weather Forecast Web App</a>
            </div>


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
};

export default WebPage;