import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

//the index acts as the hompage About

export default function About() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title"> Daniel (Dino) Ben Tovim </h1>

        <p className="bodyAbout">
          Hello, my name is Dino Ben Tovim, I have currently finished a Full
          Stack Web Developer Bootcamp Course at Hyperion dev. I have finished
          with avg grade of 98%. I have learnt a lot in these last three months
          and have built projects. I have learnt how to write HTML, CSS,
          Javascript, ExpressJS, NodeJs, React Native/Next and Mongoose/MongoDB.
          I am ready to start a new career in the IT sector. This is a new
          venture for me as I have been in music and performance arts for most
          of my professional life. When covid-19 happened I decided after some
          time that I want to explore another avenue in my life and decided to
          learn Web Development. I made a successful career out of my Djing but
          sometimes in life things change and they are out of your control. I am
          hardworking and persistent and whatever life throws at me I will
          finish what I started this is my way of life.
        </p>
        <br />
        <style jsx>{`
          p {
            color: dark-grey;
          }

          h1 {
            margin-top: 100px;

            color: black;
          }
        `}</style>
      </div>
    </div>
  );
}
