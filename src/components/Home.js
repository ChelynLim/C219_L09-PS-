import featImg from "../assets/diploma-name-pic-1.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

      <h1>{title}</h1>
      <p>
      Ready to take the leap and reach your next career milestone? At our Academy for Continuing Education, you’ll deepen your knowledge, take ownership of your learning, and master skills that will give you an edge.

It’s time to strive towards excellence for a meaningful career and a fulfilling life.
      </p>
    </div>
  );
}