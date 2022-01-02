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
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import HeroLeftChild from "./HeroLeftChild";
import HeroRight from "./HeroRight";

// const oo = [
//   {
//     title:
//       "Report: 60% of U.S. infosec professionals believe ransomware is as serious as terrorism",
//     img: "https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-1314054254-e1640797992397.jpg?resize=350%2C175&strip=all",
//     dateTime: "January 1, 2022 2:20 PM",
//     link: "https://venturebeat.com/2022/01/01/report-60-of-u-s-infosec-professionals-believe-ransomware-is-as-serious-as-terrorism/",
//   },
//   {
//     title: "Get the most value from your data with data lakehouse architecture",
//     img: "https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-1314016266.jpg?resize=350%2C175&strip=all",
//     dateTime: "January 1, 2022 10:20 AM",
//     link: "https://venturebeat.com/2022/01/01/get-the-most-value-from-your-data-with-data-lakehouse-architecture/",
//   },
//   {
//     title: "Real-time analytics in 2022: What to expect?",
//     img: "https://venturebeat.com/wp-content/uploads/2021/09/GettyImages-817442226-e1632259154234.jpg?resize=350%2C175&strip=all",
//     dateTime: "December 31, 2021 3:50 PM",
//     link: "https://venturebeat.com/2021/12/31/real-time-analytics-in-2022-what-to-expect/",
//   },
//   {
//     title: "Preparation is key to AI success in 2022",
//     img: "https://venturebeat.com/wp-content/uploads/2021/07/GettyImages-617375080.jpg?resize=350%2C175&strip=all",
//     dateTime: "December 31, 2021 2:20 PM",
//     link: "https://venturebeat.com/2021/12/31/preparation-is-key-to-ai-success-in-2022/",
//   },
//   {
//     title: "AI Weekly: AI prosecutors and pong-playing neurons closed out 2021",
//     img: "https://venturebeat.com/wp-content/uploads/2020/11/app-bidding.GettyImages-1250446181.jpg?resize=350%2C175&strip=all",
//     dateTime: "December 31, 2021 9:30 AM",
//     link: "https://venturebeat.com/2021/12/31/ai-weekly-ai-prosecutors-and-pong-playing-neurons-closed-out-2021/",
//   },
//   {
//     title:
//       "The 5 most popular infrastructure stories of 2021 and what they reveal about 2022",
//     img: "https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-1198489792.jpg?resize=350%2C175&strip=all",
//     dateTime: "December 31, 2021 9:20 AM",
//     link: "https://venturebeat.com/2021/12/31/the-5-most-popular-infrastructure-stories-of-2021-and-what-they-reveal-about-2022/",
//   },
//   {
//     title:
//       "How Northwestern’s Catalyst Lab scales healthy behavior program with Couchbase",
//     img: "https://venturebeat.com/wp-content/uploads/2017/07/health-app.jpg?resize=350%2C175&strip=all",
//     dateTime: "December 31, 2021 7:20 AM",
//     link: "https://venturebeat.com/2021/12/31/northwesterns-catalyst-lab-scales-healthy-behavior-program-with-couchbase/",
//   },
//   {
//     title:
//       "The top 5 enterprise analytics stories of 2021 (and a peek into 2022)",
//     img: "https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-1294997322.jpg?resize=350%2C175&strip=all",
//     dateTime: "December 30, 2021 3:51 PM",
//     link: "https://venturebeat.com/2021/12/30/the-top-5-enterprise-analytics-stories-of-2021-and-a-peek-into-2022/",
//   },
//   {
//     title:
//       "Babson Graduate Pooja Ika Launches eternalHealth, the First New Medicare Advantage Health Plan in Massachusetts Since 2013",
//     dateTime: "",
//     link: "https://venturebeat.com/2021/12/30/babson-graduate-pooja-ika-launches-eternalhealth-the-first-new-medicare-advantage-health-plan-in-massachusetts-since-2013/",
//   },
// ];

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
  // const [mainData, setMainData] = useState([]);
  const { isLoading, data } = useQuery("getHeroNews", fetchData);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Typography variant="h2" m={3} sx={{ textAlign: "center" }}>
        Welcome to Gadget world!
      </Typography>

      <Grid container spacing={2}>
        {/* Left Bar */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <HeroLeftChild />
            </Grid>
            <Grid item xs={8}>
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
        <Grid item xs={12} md={4}>
          <HeroRight />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
