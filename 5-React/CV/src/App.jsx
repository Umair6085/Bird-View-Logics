import './App.css'

function App() {

  return (
    <>
    <header>
      <img src="public\pic.jpg" alt="Profile Pic" />
      <div className='header-txt'>
      <h1>Muhammad Umair</h1>
      <h3>Software Engineer</h3>
      <p>Graduate, Leetcoder and Website Developer</p>
      </div>
    </header>

    <nav>
      <p><i class="fa-solid fa-envelope"></i>umairyasin744@gmail.com</p>
      <p><i class="fa-solid fa-mobile-button"></i>03212316085</p>
      <p><i class="fa-solid fa-location-dot"></i>Faisalabad, Pakistan</p>
    </nav>

    <main>
      <section className='sec1'>

          <div className="container">
            
              <h3 style={{fontWeight:"bold", fontSize: "1.5rem", color: "rgb(46, 48, 59)"}}>EDUCATION</h3>

              <div className="txtContainer">
                <h3 style={{fontWeight:"bold", fontSize: "1.3rem"}}>ADP CS</h3>
                <h3>Virtual University</h3>
                <div className='city colorGray'>
                <h5 style={{margin: "5px 0"}}>11/2023 - Present</h5>
                <h5 style={{margin: "5px 0"}}>Faisalabad</h5>
                </div>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}} className='colorGray'>Courses</h5>
                <ul>
                  <li>CS</li>
                </ul>
              </div>

              <div className="txtContainer">
                <h3 style={{fontWeight:"bold", fontSize: "1.3rem"}}>Intermediate</h3>
                <h3>University Community College, GCUF</h3>
                <div className='city colorGray'>
                <h5 style={{margin: "5px 0"}}>06/2020 - 04/2022</h5>
                <h5 style={{margin: "5px 0"}}>Faisalabad</h5>
                </div>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}} className='colorGray'>Courses</h5>
                <ul>
                  <li>ICS</li>
                </ul>
              </div>

          </div>

          <div className="container">

              <h3 style={{fontWeight:"bold", fontSize: "1.5rem", color: "rgb(46, 48, 59)"}}>WORK EXPERIENCE</h3>

              <div className="txtContainer">
                <h3 style={{fontWeight:"bold", fontSize: "1.3rem"}}>Internship</h3>
                <h3>TechnSol</h3>
                <div className='city colorGray'>
                <h5 style={{margin: "5px 0"}}>03/2023 - 04/2023</h5>
                <h5 style={{margin: "5px 0"}}>Faisalabad</h5>
                </div>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}}className='colorGray'>A Software Based Company</h5>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}}className='colorGray'>Achievements/Tasks</h5>
                <ul>
                  <li>Website Handling</li>
                </ul>
              </div>

              <div className="txtContainer">
                <h3 style={{fontWeight:"bold", fontSize: "1.3rem"}}>Job</h3>
                <h3>UpTree Developers</h3>
                <div className='city colorGray'>
                <h5 style={{margin: "5px 0"}}>09/2023 - 10/2023</h5>
                <h5 style={{margin: "5px 0"}}>Faisalabad</h5>
                </div>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}}className='colorGray'>A Software Based Company</h5>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}}className='colorGray'>Achievements/Tasks</h5>
                <ul>
                  <li>Graphic Designer</li>
                </ul>
              </div>

              

          </div>

      </section>

      <section className='sec2'>

          <div className="container">
              
            <h3 style={{fontWeight:"bold", fontSize: "1.5rem", color: "rgb(46, 48, 59)"}}>SKILLS</h3>
            <div className="btn-group">
              <button className='btn'>HTML</button>
              <button className='btn'>CSS</button>
              <button className='btn'>JavaScript</button>
              <button className='btn'>React</button>
              <button className='btn'>Git & GitHub</button>
              <button className='btn'>Bootstrap</button>
              <button className='btn'>Tailwind</button>
              <button className='btn'>Adobe Ps</button>
              <button className='btn'>Adobe Ai</button>
              <button className='btn'>Adobe Xd</button>
              <button className='btn'>Adobe In</button>
            </div>

          </div>

          <div className="container">

              <h3 style={{fontWeight:"bold", fontSize: "1.5rem", color: "rgb(46, 48, 59)"}}>PERSONAL PROJECTS</h3>

              <div className="txtContainer">
                <h3 style={{fontSize: "1rem"}}>Travel App (12/2023 - 12/2023)</h3>
                <h3 style={{fontSize: "1rem"}}>Portfolio (02/2024 - 02/2024)</h3>
                <h3 style={{fontSize: "1rem"}}>Amazon Clone (03/2024 - 03/2024)</h3>
                <h3 style={{fontSize: "1rem"}}>Food App (03/2024 - 03/2024)</h3>                
              </div>

          </div>

          <div className="container">

              <h3 style={{fontWeight:"bold", fontSize: "1.5rem", color: "rgb(46, 48, 59)"}}>CERTIFICATES</h3>

              <div className="txtContainer">
                <h3 style={{fontSize: "1rem"}}>Cisco Programming Essentials in C++ <br /> (06/2023 - 07/2023) </h3>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}} className='colorGray'>Basic C++</h5>
                <h3 style={{fontSize: "1rem"}}>Coursera Meta Intro to Front-End Development <br /> (03/2024 - 04/2024)</h3>
                <h5 style={{margin: "5px 0", fontStyle: "italic"}} className='colorGray'>HTML, CSS, Bootstrap, JavaScript, React</h5>               
              </div>

          </div>

          

      </section>
    </main>
    </>
  )
}

export default App
