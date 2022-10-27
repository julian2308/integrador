import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { IHomeData } from "types/IHomeData.type";

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
        <Box sx={{ width: "50%", maxWidth: 500, px: "2%", py: "65px" }}>
                  <Typography variant="h3" gutterBottom sx={{ color: "#ffff" ,fontSize: "1.6rem", }}>
            {data[0].title}
          </Typography>

                  <Typography variant="h4" gutterBottom sx={{ color: "#C1FD35", fontSize: "1.4rem", }}>
            {data[0].text}
          </Typography>
        </Box>
        <BoxGreen />
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row" },
            margin: '10px 0',
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            position: "absolute",
            bottom: "5%",
            width: " 100%",
           
          }}>
          <Box
            sx={{
              bgcolor: "#ffffff",
              borderRadius: 5,
              width: "480px",
              padding: 3,
              margin: "10px 10px"
            }}>
            <Typography fontWeight={700} variant="h4" 
            sx={{fontSize: "1.4rem"}}> 
              {data[1].title}
            </Typography>
            <Space />
             <Typography variant="body2"
              sx={{
                fontSize: "1rem",
                lineHeight: "1.7rem",
              }}>
              {data[1].text}
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#ffffff",
              borderRadius: 5,
              width: "480px",
              padding: 3,
              margin: "10px 10px"
            }}>
            <Typography fontWeight={700} variant="h4"
            sx={{ fontSize: "1.4rem" }}> 
            {data[2].title}
            </Typography>
            <Space />
            <Typography variant="body2"
              sx={{
                fontSize: "1rem",
                lineHeight: "1.7rem",
              }}>
              {data[2].text}
            </Typography>
          </Box>
        </Box>
      </Content>
    </>
  );
};

export default HomeImage;

const Content = styled.div<Image>`
  background-image: url(${(props) => props.image});
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -48px;
  position: relative;
   @media (max-width:999px) {
       height: 1100px;
    } 
     @media (max-width:425px) {
       height: 1000px;
    } 
`;

const BoxGreen = styled.div`
  width: 100%;
  height: 148px;
  background-color: #c1fd35;
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  bottom: 0;
   @media (max-width:999px) {
       height: 430px;
    } 
`;

const Space = styled.div`
  height: 2.5px;
  width: 100%;
  background-color: #c1fd35;
  margin: 15px 0;
`;
