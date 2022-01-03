import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import {
  SiInstagram,
  SiFacebook,
  SiTwitter,
  SiPinterest,
  SiYoutube,
  SiTiktok,
} from "react-icons/Si";

const Footer = () => {
  return (
    <Box mt={1}>
      <AppBar position="static">
        <Toolbar sx={{ textTransform: "uppercase", padding: 4 }}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={8}>
                <Box>
                  <Typography>
                    gadget news is where tomorrow is realized. It is the
                    essential source of information and ideas that make sense of
                    a world in constant transformation. The gadget news
                    conversation illuminates how technology is changing every
                    aspect of our lives—from culture to business, science to
                    design. The breakthroughs and innovations that we uncover
                    lead to new ways of thinking, new connections, and new
                    industries.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "space-around" }}
                  mt={2}
                  borderBottom={1}
                >
                  <SiFacebook size={40} />
                  <SiTwitter size={40} />
                  <SiPinterest size={40} />
                  <SiYoutube size={40} />
                  <SiInstagram size={40} />
                  <SiTiktok size={40} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Box borderBottom={1}>
                  <Typography>theverge</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>techcrunch</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>wired</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Box borderBottom={1}>
                  <Typography>Career</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>About</Typography>
                </Box>
                <Box borderBottom={1}>
                  <Typography>Cookie</Typography>
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
