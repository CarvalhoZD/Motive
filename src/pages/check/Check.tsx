import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../components/static/navbar";
import Footer from "../../components/static/footer";
import './style.css'

export default function Check() {

  const email = localStorage.getItem("token")
  console.log(email);

  return (
    <Box>
      <Box minHeight="20vh"
        width="100%"
        py={6}
        px={{ xs: 2, lg: 0 }}
        className='bgCheck'
        sx={{
          display: "grid",
          placeItems: "center",
        }}>

        < Navbar />
      </Box>


      <Box minHeight="25rem" alignItems="center" sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        boxShadow: 3,
        backgroundColor: "#fff",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        borderRadius: '16px',

      }}>

        <Grid container
          justifyContent="center"
          alignItems="center">

          <Grid container item>
            <Box
              width="100%"
              bgcolor="white"
              borderRadius="xl"
              boxShadow="xl"
              mb={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  className='check'
                  sx={{
                    alignContent: "center",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                      <Box display="flex" p={1}>

                      </Box>

                      <Box display="flex" color="white" p={1}>

                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Box component="form" p={2} method="post">
                    <Box px={3} py={{ xs: 2, sm: 6 }}>
                      
                      
                      <Typography variant="h2" mb={2} sx= {{ fontWeight: 'bold' }}>
                        Parabéns! 
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                      </Typography>
                      
                      
                      <Typography variant="body1" color="text" mb={2}>
                        Você adquiriu a aula! Confira todas as informações no e-mail cadastrado. Bom treino!
                      </Typography>
                    </Box>
                    <Box pt={0.5} pb={3} px={3}>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
} 