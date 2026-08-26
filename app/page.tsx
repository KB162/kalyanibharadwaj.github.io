import Link from "next/link";

export default function Home() {
  return (
    <main className="site-container">
      {/* Hero */}
      <section className="hero">
        <p className="eyebrow">COMPUTER SCIENCE • AI • COMPUTER VISION • ROBOTICS </p>

        <h1>
          Kalyani
          <br />
          Bharadwaj
        </h1>

        <p className="hero-subtitle">
          Building intelligent systems that connect software with the real
          world.
        </p>

        <p className="hero-description">
          I&apos;m a Computer Science Engineering student at IIIT Pune
          exploring Computer Vision, Deep Learning, Robotics, and Embedded AI.
          I use this space to document what I build, what I learn, and what I
          discover through research.
        </p>

        <div className="links">
          <Link href="/blog" className="button primary">
            Read my blog →
          </Link>

          <a
            href="https://kb162.github.io/kalyanibharadwaj.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub ↗
          </a>

          <span className="button disabled">Resume — coming soon</span>
        </div>
      </section>

      <hr />

      {/* About */}
      <section>
        <p className="section-label">01 / ABOUT</p>

        <h2>Curious about intelligent systems.</h2>

        <p className="large-text">
          I enjoy understanding how things work from the fundamentals and then
          turning that understanding into something that actually runs.
        </p>

        <p>
          My interests currently span Computer Vision, Deep Learning,
          electronics, robotics, and machine learning. I&apos;m particularly
          interested in systems where an AI model can interact with the
          physical world through sensors, cameras, and embedded hardware.
        </p>
      </section>

      <hr />

      {/* Featured Projects */}
      <section>
        <p className="section-label">02 / SELECTED WORK</p>

        <h2>Things I&apos;m building.</h2>

        <div className="project-grid">
          <article className="project-card featured">
            <span className="project-number">01</span>

            <h3>Gas Transformer / Electronic Nose</h3>

            <p>
              Researching MOS gas sensors and neural networks to identify gas
              mixtures and estimate their concentration from sensor signals.
              Exploring transformer-based approaches for an electronic nose.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Neural Networks</span>
              <span>Transformers</span>
              <span>Research</span>
            </div>
          </article>

          <article className="project-card">
            <span className="project-number">02</span>

             <h3>Building a deepfake detector</h3>  
             <p>Building a deepfake detector on already existing ResNet-50 model to detect the deepfake images 
             </p>

            <h3>Computer Vision Robot Car</h3>

            <p>
              Building a small robotic platform that combines computer vision
              with embedded electronics to make a physical system respond to
              its environment.
            </p>

            <div className="tags">
              <span>OpenCV</span>
              <span>ESP32</span>
              <span>Arduino</span>
              <span>Robotics</span>
            </div>
          </article>

          <article className="project-card">
            <span className="project-number">03</span>

            <h3>Gesture Controlled LED</h3>

            <p>
              A computer vision project where hand gestures detected through
              MediaPipe and OpenCV are used to control a physical LED.
            </p>

            <div className="tags">
              <span>OpenCV</span>
              <span>MediaPipe</span>
              <span>Arduino</span>
            </div>

            <video
              className="project-video"
              src="/videos/gesture-controlled-led.mp4"
              controls
              muted
              playsInline
            />
          </article>

          <article className="project-card">
            <span className="project-number">04</span>

            <h3>Hand Detection</h3>

            <p>
              Real-time hand landmark detection and finger tracking using
              MediaPipe and OpenCV, exploring the fundamentals behind
              vision-based interaction.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>MediaPipe</span>
            </div>
          </article>
        </div>
      </section>

      <hr />

      {/* CS231n */}
      <section>
        <p className="section-label">03 / LEARNING IN PUBLIC</p>

        <h2>Understanding the fundamentals.</h2>

        <p className="large-text">
          I&apos;m working through Stanford&apos;s CS231n Computer Vision
          course and implementing concepts rather than only studying them
          theoretically.
        </p>

        <p>
          From neural networks and backpropagation to optimization and
          convolutional networks, I&apos;m trying to understand the
          mathematics and code behind modern computer vision systems.
        </p>

        <Link href="/blog" className="text-link">
          Follow the learning journey →
        </Link>
      </section>

      <hr />

      {/* Research */}
      <section>
        <p className="section-label">04 / RESEARCH</p>

        <h2>From sensors to intelligence.</h2>

        <p>
          I&apos;m currently exploring gas sensing using MOS sensors and neural
          networks as part of research at IIIT Pune. The broader goal is to
          understand how raw sensor signals can be transformed into useful
          information about the gases present and their concentrations.
        </p>

        <div className="research-note">
          <strong>Current question</strong>
          <p>
            How can we build an electronic nose that can generalize from raw
            sensor signals to unseen gas mixtures?
          </p>
        </div>
      </section>

      <hr />

      {/* Skills */}
      <section>
        <p className="section-label">05 / TOOLBOX</p>

        <h2>Technologies I work with.</h2>

        <div className="skills">
          <div>
            <h3>Languages</h3>
            <p>Python · C · C++ · SQL</p>
          </div>

          <div>
            <h3>AI / Vision</h3>
            <p>PyTorch · NumPy · OpenCV · MediaPipe</p>
          </div>

          <div>
            <h3>Hardware</h3>
            <p>Arduino · ESP32 · Sensors · Electronics</p>
          </div>

          <div>
            <h3>Development</h3>
            <p>Git · GitHub · FastAPI · PostgreSQL · Next.js</p>
          </div>
        </div>
      </section>

      <hr />

      {/* Beyond engineering */}
      <section>
        <p className="section-label">06 / BEYOND ENGINEERING</p>

        <h2>Still curious about everything else.</h2>

        <ul className="simple-list">
          <li>Reading research papers and technical books.</li>
          <li>Learning through open courses and hands-on experiments.</li>
          <li>
            Exploring skincare and lip-care formulation as a creative
            product-design interest.
          </li>
          <li>
            Trying to become a better engineer through consistent learning and
            curiosity.
          </li>
        </ul>
      </section>

      <hr />

      {/* Footer */}
      <footer>
        <p>
          Built while learning. Updated as I build.
        </p>

        <div className="footer-links">
          <Link href="/blog">Blog</Link>

          <a
            href="https://github.com/KB162"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}