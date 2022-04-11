import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Imagelist from "../src/container/imagelist";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Imagelist />
    </div>
  );
};

export default Home;
