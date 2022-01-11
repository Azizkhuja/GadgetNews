import {
  Container,
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { useQuery } from "react-query";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeroLeftChild from "./HeroLeftChild";
import HeroRight from "./HeroRight";

const fetchData = async () => {
  let url = "https://tech-news3.p.rapidapi.com/engadget";
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

const Hero = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const { isLoading, data } = useQuery("getHeroNews", fetchData);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Typography
        variant={matches ? "h5" : "h3"}
        m={3}
        sx={{ textAlign: "center" }}
      >
        Welcome to Gadget world!
      </Typography>

      <Grid container spacing={2}>
        {/* Left Bar */}
        <Grid item xs={12} sm={8} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <HeroLeftChild />
            </Grid>
            <Grid item xs={12} md={8}>
              {data.slice(0, 9).map((hero, idx) => {
                return (
                  <Card key={idx}>
                    <CardActionArea target="_blank" href={hero.link}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={hero.img}
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
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        {/* Right Bar */}
        <Grid item xs={12} sm={4} md={4}>
          <HeroRight />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
