import type { NextPage } from "next";
import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import LayoutGeneral from "grupo-04/components/layout/layout-general";
import BodySingle from "grupo-04/components/layout/general/general-body";
import MainImageHome from "grupo-04/components/home/img-home";
import HomeData from "models/HomeData";
import HomeImage from "models/HomeImage";
import { IHomeData } from "types/IHomeData.type";
import { IHomeImage } from "types/IHomeImage.type";
import { useEffect, useState } from "react";
import LayoutLogged from "grupo-04/components/layout/layout-logged";
import LateralMenu from "grupo-04/components/menu/lateral-menu";
interface Props {
  data: IHomeData[];
  dataImage: IHomeImage[];
}

const Home: NextPage<Props> = ({ data, dataImage }) => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setLogged(true) : setLogged(false);
  }, []);

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Welcome to Digital Money House" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {logged ? (
        <LayoutLogged>
          <LateralMenu />
        </LayoutLogged>
      ) : (
        <LayoutGeneral>
          <BodySingle>
            <MainImageHome image={dataImage[0].url} data={data} />
          </BodySingle>
        </LayoutGeneral>
      )}
    </>
  );
};

export async function getServerSideProps() {
  try {
    await dbConnect();

    /* find all the data in our database */
    const result = await HomeData.find({});
    const data = result.map((doc) => {
      const info = doc.toObject();
      info._id = info._id.toString();
      return info;
    });

    /* find all the data in our database */
    const resultImage = await HomeImage.find({});
    const dataImage = resultImage.map((doc) => {
      const info = doc.toObject();
      info._id = info._id.toString();
      return info;
    });

    return { props: { data, dataImage } };
  } catch (error) {
    console.log(error);
  }
}

export default Home;
