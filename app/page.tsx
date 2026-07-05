import Link from "next/link";
export default function Home() {
  return (
    <main
    style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Kalyani Bharadwaj
      </h1>
      
      <h2 style={{ color: "#403d3dff", fontWeight: "normal" }}>
        Computer Vision • Robotics • Embedded AI
      </h2>

        <p
        style={{
          fontStyle: "italic",
          color: "#6c5151ff",
          marginBottom: "30px",
        }}
      >
        ~ Documenting my journey of learning and building ~ 🚀
      </p>
      <p>
        I am a Computer Science Engineering student at IIIT Pune,passionate about building
        intelligent systems using Computer Vision and embedded electronics and trying to record my learning journey.
      </p>
       
       <p style={{ fontSize: "18px" }}>
        My goal is to bridge software and hardware by creating projects where
        AI interacts with the real world.
      </p>

      <hr />

      <h2>Explore</h2>

      <ul>
        <li>
            <Link href="/blog">
              Read my blog →
</Link>
</li>
<li>
          <a
            href="https://github.com/KB162/kalyanibharadwaj.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
         <li> Resume (Coming Soon)</li> 

        </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* Featured Projects */}
      <h2>Featured Projects</h2>

      <ul>

        <li>
          <strong>Gesture Controlled LED using cv</strong>
          <br />
          control a physical LED using hand gestures detected through Computer Vision with OpenCV , MediaPipe and Arduino
          </li>
          <br />

        <li>
          <strong>Hand Detection with MediaPipe and opencv</strong>
          <br />
          Real-time hand landmark detection and finger tracking using OpenCV and Mediapipe
          </li>
          <br />
        
        <li>
          <strong>CS231n - Stanford Journey</strong> 
          <br />
          Learning Stanford's computer vision course and writing my own summeries and implementations
          </li>
          <br />
        <></>
        
        <li>
          <strong>Research Project</strong>
          <br />
          Researching MOS sensors and Neural Networks for gas detection with a
          professor at IIIT Pune.
          </li>
          <br />
      </ul>

      

      <hr style={{ margin: "40px 0" }} />

      {/* Current Focus */}
      <h2>Currently Learning</h2>


      <ul>
        <li>Deep Learning for Computer Vision (cs231n) -

        </li>
        <li>Robotics using arduino </li>
        <li>Reading Research Papers</li>
        <li>Building a computer vision controlled robotic car </li>
        <li>Electronics</li>

        
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* Future Projects */}
      <h2>Upcoming Projects</h2>

      <ul>
        <li>Autonomous Robot car </li>
        <li>Neural Networks from scratch </li>
       </ul>
      <hr style={{ margin: "40px 0" }} />

       <h2>Beyond Engineering</h2>

      <li>Reading research papers in Computer Vision, AI and Robotics.</li>
      <li>Learning through open courses, technical books and hands-on projects.</li>
      <li>Formulating skincare and lip care products, combining creativity with
    product design.</li>
      <li>Believing that consistent learning and curiosity are the foundation of
    becoming a better engineer.</li>
      


     
    </main>
  );
}