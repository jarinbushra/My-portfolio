import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const skills = [
    'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js',
    'HTML/CSS', 'SQL', 'Git', 'Docker', 'AWS', 'Machine Learning'
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing sales data using Python, Pandas, and Plotly. Includes real-time updates and export functionality.',
      technologies: ['Python', 'Pandas', 'Plotly', 'Flask'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile app for task management built with React Native. Features offline sync and collaborative features.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot using natural language processing with TensorFlow. Trained on custom dataset for customer support.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      github: '#',
      demo: '#'
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h1>Portfolio</h1>
          </div>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Alex Johnson</span></h1>
            <h2>Computer Science Student</h2>
            <p>Passionate about creating innovative solutions through code. Currently pursuing my degree in Computer Science with a focus on full-stack development and machine learning.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Profile" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a dedicated Computer Science student with a passion for technology and problem-solving. My journey in programming started during my freshman year, and since then, I've been constantly learning and applying new technologies to real-world problems.</p>
              <p>When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or exploring the latest trends in AI and machine learning. I believe in the power of technology to make a positive impact on society.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Technologies Learned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn-link">GitHub</a>
                  <a href={project.demo} className="btn-link">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2>Education</h2>
          <div className="education-content">
            <div className="education-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">University of Technology</p>
              <p className="duration">2021 - 2025</p>
              <p className="description">Currently in my senior year with a GPA of 3.8. Coursework includes Data Structures, Algorithms, Software Engineering, Database Systems, and Machine Learning.</p>
            </div>
            <div className="education-item">
              <h3>High School Diploma</h3>
              <p className="institution">Tech High School</p>
              <p className="duration">2017 - 2021</p>
              <p className="description">Graduated with honors. Active member of the Computer Science Club and participated in regional programming competitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
              <div className="contact-details">
                <p><strong>Email:</strong> alex.johnson@email.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Location:</strong> San Francisco, CA</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
