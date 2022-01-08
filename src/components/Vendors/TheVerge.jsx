import React from "react";
import { useQuery } from "react-query";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

const stableImage =
  "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9672633/VergeOG.0_1200x627.0.png";

const theVergeFetchData = async () => {
  let url = "https://tech-news3.p.rapidapi.com/verge";
  return (
    await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tech-news3.p.rapidapi.com",
        "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    })
  ).json();
};

const TheVerge = () => {
  const { isLoading, data } = useQuery("theverge", theVergeFetchData);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        {data.map((hero, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <Box>
                <Card sx={{ maxHight: 100 }}>
                  <CardActionArea target="_blank" href={hero.link}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={hero.img || stableImage}
                      alt={hero.title}
                    />
                    <CardContent>
                      <Typography>{hero.dateTime}</Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {hero.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {hero.para}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Divider />
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TheVerge;
