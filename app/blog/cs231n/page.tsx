export default function cs231stanford() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>learning computer vision</h1>

      <p>DATE : June 27, 2026</p>

      <hr />

      <p>
        This was my first time learning something from the free courses offered by stanford -
        Computer Vision
        The course was taught by  feifei li and offered detail explainations on various Neural Networks  
      </p>

      <h2>The Idea</h2>

      <p>
        I wanted to learn computer vision as it made me curious and at the same time exicited about tech used behind it 
        I made a small project using the open cv and media pipe for my college project (ps I got an A on it)
        It basically first recognised my hands and counted the number of fingers open and whether the hand was left or right 
        I also fed different handsigns that it recognised - for example - (thums up , rock sign , fist open , fist close etc)
        I did this by calculating the different hand length and the angle between them using cosine for all the fingers except the thumb in the Y axis 
        and to recognise the thumb I used X axis 
      </p>

      <h2>Technologies</h2>

      <ul>
        <li>computer vision</li>
        <li>Python</li>
        <li>OpenCV</li>
        <li>MediaPipe</li>
        
      </ul>

      <h2>What I Learned</h2>

      <p>
        This project taught me how computer vision can be used for recognising objects and hence help build autonomous systems 
       
      </p>
    </main>
  );
}