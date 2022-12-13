import React, { useEffect, useState } from "react";
import { Women } from "../../services/Women";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function WomenCollectionSunglasses() {
  const [dataCollection, setDataCollection] = useState([]);

  useEffect(() => {
    async function fetchData() {
        let dataSunglasses= await Women.getWomenSunglassesData();
        setDataCollection(dataSunglasses);
    }
    fetchData();
  }, []);


  return (
    <>
      <Grid container spacing={2}>
        {dataCollection &&
          dataCollection?.glasses?.map((element, index) => {
            return (
              <Grid item xs={3} key={index}>
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={element.glass_variants[0]?.media[0]?.url}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {element.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {element.configuration_name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="secondary" variant="outlined">
                        ADD
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
