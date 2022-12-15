import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";
import './footer.css'


export default function Footer() {
  return <footer >
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor={"#040919"}
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>
              <img src="/WhiteLogo-Motive.png" alt="WhiteLogoMotive" height={50} width={200} />
            </Box>
            <Box pr={15}>
              <Typography>
                Somos a MOTIVE, site de saúde e bem-estar. {"\n"}
              </Typography>
              <Typography>
                Proporcionamos uma qualidade de vida melhor, saudável e acessível para todas as idades.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={3} borderColor={"#0DCA70"} pb={1}>LINKS ÚTEIS</Box>
            <Box pt={3} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to="/" className="LinkFooter" >
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7} , transition: "0.2s all"}}>
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to='/' className="LinkFooter">
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7} , transition: "0.2s all"}}>
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to='/' className="LinkFooter">
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7} , transition: "0.2s all"}}>
                  Contact
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={3} borderColor={"#0DCA70"} pb={1}>CONTATO</Box>
            <Box pt={3} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to="/" className="LinkFooter" >
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7} , transition: "0.2s all"}}>
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to='/' className="LinkFooter">
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7} , transition: "0.2s all"}}>
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to='/' className="LinkFooter">
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7} , transition: "0.2s all"}}>
                  Contact
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box
          textAlign={"center"}
          pt={{ xs: 5, sm: 10 }}
          pb={{ xs: 5, sm: 0 }} >
          Copyright <strong>Motive</strong> &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
}