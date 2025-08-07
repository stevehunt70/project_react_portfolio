import watermarkImg from '../assets/logo_watermark.png';
import projImg1 from '../assets/proj_1.png';
import projImg2 from '../assets/proj_2.png';
import projImg3 from '../assets/proj_3.png';
import projImg4 from '../assets/proj_4.png';
import projImg5 from '../assets/proj_5.png';
import projImg6 from '../assets/proj_6.png';
import projImg7 from '../assets/proj_7.png';
import projImg8 from '../assets/proj_8.png';
import projImg9 from '../assets/proj_9.png';

const projects = [
    {
        title: 'HTML Portfolio',
        image: projImg1,
        codes: 'HTML  /  CSS  /  GitHub',
        description: 'In this project I created a personal portfolio pHTML page from scratch using HTML, CSS, display modes and a form for contacting.',
        github: 'https://github.com/stevehunt70/project_portfolio.git',
        live: 'https://stevehunt70.github.io/project_portfolio',
    },
    {
        title: 'Multi-page website',
        image: projImg2,
        codes: 'HTML  /  CSS',
        description: 'Creation of a multi-page website, containing a minimum of 5 pages. This project showcases the following techniques: Flexbox, Flexbox Alignment, use of a pseudo class, css variables and a styled contact form',
        github: 'https://github.com/stevehunt70/project_multiPage.git',
        live: 'https://stevehunt70.github.io/project_multiPage',
    },
    {
        title: 'Migrating a site using Bootstrap',
        image: projImg3,
        codes: 'Javascript  /  Bootstrap',
        description: 'Using Bootstrap, a great tool for scaffolding websites quickly, I took one of my existing projects (the multi-page website) and migrated it to use the layouts and css that come with Bootstrap.',
        github: 'https://github.com/stevehunt70/project_using_bootstrap_grid.git',
        live: 'https://stevehunt70.github.io/project_using_bootstrap_grid',
    },
    {
        title: 'Interactive TODO List Application ',
        image: projImg4,
        codes: 'Javascript  /  DOM',
        description: 'This project uses Javascript to create an Interactive TODO list application that allows you create a list of activities that you need to complete. Adding, editing, deleting and complete are all functions of the TODO application.',
        github: 'https://github.com/stevehunt70/project_interactive_todo_list.git',
        live: 'https://stevehunt70.github.io/project_interactive_todo_list',
    },
    {
        title: 'Weather Dashboard',
        image: projImg5,
        codes: 'Javascript  /  API  /  Collaboration',
        description: 'The weather dashboard uses API calls to the openweather.org website. It gathers the data for a 5 day forecast and allows a drilldown to the detailed level of every 3 hours. More aesthetically pleasing icons were used rather than the icons from the openweather website. By using different icons it made it more complex for an IF statement to look at the description to determine which icon to use.',
        github: 'https://github.com/stevehunt70/project_weather_report.git',
        live: 'https://stevehunt70.github.io/project_weather_report',
    },
    {
        title: 'Python Script',
        image: projImg6,
        codes: 'Python  /  Node.js  /  PyInquirer',
        description: 'Using Python scripting I created a workable README.md file. The file was generated after answering certain questions and saved in the appropriate location and formatted with headers, sub-headers and bullet points.',
        github: 'https://github.com/stevehunt70/project_create_readme_python.git',
        live: 'https://www.youtube.com/watch?v=-vaHD7Skokg',
    },
    {
        title: 'Note-taking Application',
        image: projImg7,
        codes: 'Express  /  JSON  /  Render',
        description: 'The creation of a Note Taking Application where you can create, read, update and delete your notes. This was my first full stack web application using node.js and implementing onto Render as GitHub cannot use node as a backend for creating the pages to your project.',
        github: 'https://github.com/stevehunt70/project_full_stack_notes_application.git',
        live: 'https://project-full-stack-notes-application.onrender.com',
    },
    {
        title: 'Full Stack Tech Application',
        image: projImg8,
        codes: 'jsonWebToken  /  API  /  mySQL',
        description: 'A recipe driven full stack Tech application that allows a logged in user to read, add, edit and remove recipes from a mySQL backend database. Each recipe has a title, description, a category, how many servings, the ingredients and finally instructions on how to cook.',
        github: 'https://github.com/stevehunt70/project_full_stack_recipe_db.git',
        live: 'https://www.youtube.com/watch?v=7xcEohlcpLw',
    },
    {
        title: 'Dynamic Portfolio',
        image: projImg9,
        codes: 'Render  /  React',
        description: 'A React-based dynamic portfolio, using components to enhance the functionality of the application. The portfolio includes a gallery of projects completed. The site consists of a static navigation bar and a footer. The menu options populate the centre of the screen with the details of the selection.',
        github: 'https://github.com/stevehunt70/project_full_stack_recipe_db.git',
        live: 'https://www.youtube.com/watch?v=7xcEohlcpLw',
    },
]

const WebPage = () => {
  return (
    <main style={styles.container}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.cardGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.image} />
            <h4 style={styles.h4txt}>{project.title}</h4>
            <hr style={styles.sectionDivider}></hr>
            <p style={styles.pTxt}>{project.description}</p>
            <p style={styles.codeTxt}>{project.codes}</p>
            <div style={styles.buttonGroup}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button style={styles.button}>GitHub</button>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <button style={styles.button}>Live Site</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const styles = { 
  container: {
    padding: '0px 20px',
    fontFamily: 'Verdana, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#08789a',
    marginBottom: '30px',
  },
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  card: {
    width: '300px',
    border: '2px solid #f99d1b',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '5px 6px 5px 0 rgba(0,0,0,0.2)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  h4txt: {
    color: '#555555',
    fontStyle: 'italic',
  },
  pTxt: {
    color: '#555555',
    fontSize: '13px',
    textAlign: 'left',
  },
  codeTxt: {
    color: '#555555',
    fontSize: '10px',
    textAlign: 'center',
    padding: '5px',
    border: 'none',
    borderTop: '1px solid #50c878',
    borderBottom: '1px solid #50c878',
    borderRadius: '8px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '10px',
    marginTop: '15px',
  },
  button: {
    padding: '8px 16px',
    border: '1px solid #08789a',
    borderRadius: '8px',
    backgroundColor: '#dbeff5ff',
    color: '#08789a',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
  },
  sectionDivider: {
    width: '50%',
    height: '1px',
    margin: '0 auto',
    background: '#08789a',
  },
};

export default WebPage;