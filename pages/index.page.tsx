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
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
interface Props {
  data: IHomeData[];
  dataImage: IHomeImage[];
}

const Home: NextPage<Props> = ({ data, dataImage }) => {
  const router = useRouter();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setLogged(true) : setLogged(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/", undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Welcome to Digital Money House" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {logged ? (
        <LayoutLogged>
          <Stack sx={{ height: "100%", width: "100%" }}>
            <Stack
              sx={{
                height: "100%",
                width: "300px",
                backgroundColor: "#C1FD35",
                padding: "60px 30px",
              }}>
              <Typography
                mb="10px"
                variant="h6"
                color={"black"}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => <></>}>
                Inicio
              </Typography>
              <Typography
                mb="10px"
                variant="h6"
                color={"black"}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => <></>}>
                Actividad
              </Typography>
              <Typography
                mb="10px"
                variant="h6"
                color={"black"}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => <></>}>
                Tu perfil
              </Typography>
              <Typography
                mb="10px"
                variant="h6"
                color={"black"}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => <></>}>
                Cargar dinero
              </Typography>
              <Typography
                mb="10px"
                variant="h6"
                color={"black"}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => <></>}>
                Pagar servicios
              </Typography>
              <Typography
                mb="10px"
                variant="h6"
                color={"black"}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => <></>}>
                Tarjetas
              </Typography>
              <Typography
                mb="10px"
                variant="h6"
                color={"black"}
                sx={{ ":hover": { cursor: "pointer" } }}
                onClick={() => logout()}>
                Cerrar Sesión
              </Typography>
            </Stack>
          </Stack>
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
