import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <img className="perfil cursorDefault" src="src/assets/perfil2.jpg" />
        <img
          className="rings ring1 cursorDefault"
          src="src/assets/pattern-rings.svg"
        />
        <img
          className="rings ring2 cursorDefault"
          src="src/assets/pattern-rings.svg"
        />
        <img
          className="rings ring3 cursorDefault"
          src="src/assets/pattern-circle.svg"
        />

        <nav>
          <h6>Ruan Valença</h6>

          <div className="iconsNav">
            <a
              href="https://github.com/RuanValenca"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <img src="src/assets/icon-github.svg" alt="Github" />
            </a>

            <a
              href="https://www.linkedin.com/in/ruanvalenca/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img src="src/assets/icon-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </nav>
        <section className="introduction">
          <p className="title">
            Seja bem-vindo!
            <br /> Sou <span id="name">Ruan Carlos.</span>
          </p>
          <p className="description">
            Morando em Belo Horizonte, sou um desenvolvedor Front End focado em
            construir websites com boas práticas e visual atrativo.
          </p>
          <br />
           <a
              href="https://www.linkedin.com/in/ruanvalenca/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
          <span 
          className="contactRequest">Converse Comigo</span>
          </a>
        </section>
        <hr className="divider" />
        <section className="skills">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JAVASCRIPT</h3>
          <h3>REACT</h3>
          <h3>STYLED</h3>
          <h3>TYPESCRIPT</h3>
        </section>

        <div className="titleProjects">
          <p className="title">Projetos</p>

           <a
              href="https://www.linkedin.com/in/ruanvalenca/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
          <span 
          className="contactRequest">Converse Comigo</span>
          </a>
        </div>
        <div className="projectsGrid">
          <a
            href="https://throwdown-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard img1"
          ></a>

          <a
            href="https://ip-tracker-delta-self.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard img2"
          ></a>

          <a
            href="https://viajebem.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard img3"
          ></a>

          <a
            href="https://absolute-cinema-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard img4"
          ></a>
        </div>
      </div>
      <footer>
        <div className="footerText">
          <h1>Contato</h1>
          <p>
            Caso tenha interesse nas minhas habilidades e queira discutir uma
            possível colaboração, fique à vontade para entrar em contato.
          </p>
        </div>
        <div className="linkForm">
          <h6>Ruan Valença</h6>

          <div className="iconsNavFooter">
            <a
              href="https://github.com/RuanValenca"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <img src="src/assets/icon-github.svg" alt="Github" />
            </a>

            <a
              href="https://www.linkedin.com/in/ruanvalenca/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img src="src/assets/icon-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
