import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import {
  SiInstagram,
  SiFacebook,
  SiTwitter,
  SiPinterest,
  SiYoutube,
  SiTiktok,
} from "react-icons/Si";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const matchesMin = useMediaQuery("(max-width:400px)");
  return (
    <Box mt={1} className="footer">
      <AppBar position="static">
        <Toolbar sx={{ textTransform: "uppercase", padding: 4 }}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Box borderBottom={1}>
                  <Typography sx={{ textTransform: "none" }}>
                    GADGET NEWS is where tomorrow is realized. It is the
                    essential source of information and ideas that make sense of
                    a world in constant transformation. The GADGET NEWS
                    conversation illuminates how technology is changing every
                    aspect of our lives—from culture to business, science to
                    design. The breakthroughs and innovations that we uncover
                    lead to new ways of thinking, new connections, and new
                    industries.
                  </Typography>
                </Box>
                <Grid container mt={2}>
                  <Button
                    target="_blank"
                    href="https://www.facebook.com/"
                    sx={{ color: "white" }}
                  >
                    <SiFacebook size={matches ? 20 : 26} />
                  </Button>
                  <Button
                    target="_blank"
                    href="https://twitter.com/home"
                    sx={{ color: "white" }}
                  >
                    <SiTwitter size={matches ? 20 : 26} />
                  </Button>
                  <Button
                    target="_blank"
                    href="https://www.pinterest.com/"
                    sx={{ color: "white" }}
                  >
                    <SiPinterest size={matches ? 20 : 26} />
                  </Button>
                  <Button
                    target="_blank"
                    href="https://www.youtube.com/"
                    sx={{ color: "white" }}
                  >
                    <SiYoutube size={matches ? 20 : 26} />
                  </Button>
                  <Button
                    target="_blank"
                    href="https://www.instagram.com/"
                    sx={{ color: "white" }}
                  >
                    <SiInstagram size={matches ? 20 : 26} />
                  </Button>
                  <Button
                    target="_blank"
                    href="https://www.tiktok.com/"
                    sx={{ color: "white" }}
                  >
                    <SiTiktok size={matches ? 20 : 26} />
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}>
                  <Link to="/9to5Mac">9to5mac</Link>
                </Box>
                <Box borderBottom={1}>
                  <Link to="/TechRadar">techradar</Link>
                </Box>
                <Box borderBottom={1}>
                  <Link to="/GSMArena">gsmarena</Link>
                </Box>
                <Box borderBottom={1}>
                  <Link to="/TheVerge">theverge</Link>
                </Box>
                <Box borderBottom={1}>
                  <Link to="/TechCrunch">techcrunch</Link>
                </Box>
                <Box borderBottom={1}>
                  <Link to="/Wired">wired</Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box borderBottom={1}>
                  <Typography>Career</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>About</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>Cookie</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>Advertise</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>Customer Care</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>contact us</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
