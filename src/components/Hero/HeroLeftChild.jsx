import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useQuery } from "react-query";

const fetchDataTechradar = async () => {
  let url = "https://tech-news3.p.rapidapi.com/techcrunch";
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

const HeroLeftChild = () => {
  const { isLoading, data } = useQuery("getHeroLeftChild", fetchDataTechradar);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {data.slice(0, 7).map((hero, idx) => {
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
                <Typography variant="overline">{hero.dateTime}</Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {hero.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hero.para}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
};

export default HeroLeftChild;
