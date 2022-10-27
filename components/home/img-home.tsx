import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { IHomeData } from "types/IHomeData.type";

const Content = styled.div<Image>`
  background-image: url(${(props) => props.image});
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -48px;
  position: relative;
`;

const BoxGreen = styled.div`
  width: 100%;
  height: 148px;
  background-color: #C1FD35;
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  bottom: 0;
`;

const Space = styled.div`
    height: 2.5px;
    width: 100%;
    background-color: #C1FD35;
    margin: 10px 0;
`;

type Image = {
  image: string;
};

type Props = {
  image: string;
  data: IHomeData[];
};

const HomeImage: FC<Props> = ({ image, data }) => {
  return (
    <>
      <Content image={image}>
        <Box sx={{ width: "100%", maxWidth: 500, px: "2%", py: "3%" }}>
          <Typography variant="h3" gutterBottom sx={{ color: "#ffff" }}>
            {data[0].title}
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ color: "#C1FD35" }}>
            {data[0].text}
          </Typography>
        </Box>
        <BoxGreen/>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row" } ,
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            position: "absolute",
            bottom: "10%",
            width: " 100%",
          }}>
            
          <Box
            sx={{
              bgcolor: "#ffffff",
              borderRadius: 5,
              width: "500px",
              padding: 3,
            }}>
            <Typography variant="h4">{data[1].title}</Typography>
            <Space/>
            <Typography>{data[1].text}</Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#ffffff",
              borderRadius: 3,
              width: "500px",
              padding: 3,
            }}>
            <Typography variant="h4"> {data[2].title}</Typography>
            <Space/>
            <Typography>{data[2].text}</Typography>
          </Box>
        </Box>
      </Content>
    </>
  );
};

export default HomeImage;
