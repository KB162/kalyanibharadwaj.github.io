import Link from "next/link";
export default function Blog() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>My Blog</h1>

      <ul>
        <li>
          <Link href="/blog/gesture-controlled-LED">
            Building a Gesture Controlled LED
           </Link>
        </li>
         
        <li>
          <Link href="/blog/cs231n">
            Learnings from cs231n course by stanford 
           </Link>
        </li>
        
        <li>
          <Link href="/blog/electronics">
             Learning Electronics 
           </Link>
        </li>
  

      </ul>
    </main>
  );
}