import React, { useEffect, useState } from "react";
import { Women } from "../../services/Women";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Grid from "@mui/material/Grid";

export default function MenCollection() {
  const [dataCollection, setDataCollection] = useState([]);


  // commented code for implement the filters
  // const [showFilter, setShowFilter] = React.useState(true);
  // const [filter, setFilter] = React.useState({});

  // const handleShowFilter = () => {
  //   setShowFilter(!showFilter);
  // };

  // const updateFilter = (e) => {
  //   setFilter({ ...filter, [e.target.name]: e.target.value });
  // };

  // useEffect(() => {}, [filter]);



  useEffect(() => {
    async function fetchData() {
      let data = await Women.getDataCollection();
      setDataCollection(data);
      let dataSunglasses= await Women.getSunglassesDataCollection();
      console.log("dataSunglasses",dataSunglasses);
    }

    fetchData();
  }, []);


  return (
    <>
      <div>
        {/* {showFilter ? (
          <div >
            <div >
              <h1>Filters</h1>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={3} xl={3}>
                <Typography variant="caption">Make</Typography>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Fit</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={filter?.fit}
                      label="Fit"
                      name="Fit"
                      onChange={updateFilter}
                    >
                      <MenuItem value="Wide">Wide</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="Narrow">Narrow</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
        
             
            </Grid>
            <div >
             
              <Button
                variant="contained"
                circular={true}
                color="info"
                onClick={handleShowFilter}
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          ""
        )} */}
      </div>
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
