import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
//the index acts as the hompage About

export default function About() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title"> Daniel (Dino) Ben Tovim </h1>

        <p className="bodyAbout">
          Hello my name my real name is Daniel but everyone calls me Dino. I was
          born in Israel and grew up in South Africa. I moved back to Israel at
          the age of 17 were I matriculated. I moved back five years ago to
          finish my Bachelor of Arts in Music Production and Sound engineering.
          Music has been a big part of life. I have been in the events industry
          and Dj’ing for most of my professional life. I produce mainly
          electronic music. I have organized small events as well. In the last
          couple of months I have been interested in programing. I started to
          learn Python and built my first web app using Django.I then decided
          that Web Development is the path that I would like to pursue and
          enrolled in the Hyperion Dev 3 month bootcamp.
          <br />I believe that in life we need balance I have not given up my
          passion for music but added a new passion to the list I believe that
          we should not limit ourselves into believing that we can only be
          focused on one path the mind is capable of doing extraordinary things,
          if we are willing to take the leap.
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
