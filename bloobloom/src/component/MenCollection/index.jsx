import React, { useEffect, useState } from "react";
import { Women } from "../../services/Women";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

export default function MenCollection() {
  const [dataCollection, setDataCollection] = useState([]);

  // commented code for implement the filters
  const [showFilter, setShowFilter] = React.useState(false);
  const [filter, setFilter] = React.useState({});

  const updateFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  async function fetchData(params) {
    // const getParams = new URLSearchParams({ ...params }).toString();
    let data = await Women.getDataCollection(params);
    setDataCollection(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmitFilter = () => {
    fetchData(filter);  
  };
  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Button
        size="small"
        color="secondary"
        variant="outlined"
        onClick={handleFilter}
      >
        Filter
      </Button>
      <div>
        {showFilter ? (
          <div>
            <div>
              <h1>Filters</h1>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={3} xl={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      colour
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={filter?.colour}
                      label="colour"
                      name="colour"
                      onChange={updateFilter}
                    >
                      <MenuItem value="black">black</MenuItem>
                      <MenuItem value="tortoise">tortoise</MenuItem>
                      <MenuItem value="coloured">coloured</MenuItem>
                      <MenuItem value="crystal">crystal</MenuItem>
                      <MenuItem value="bright">bright</MenuItem>
                      <MenuItem value="dark">dark</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={3} xl={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Shape</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={
                        filter?.glass_variant_frame_variant_frame_tag_configuration_names
                      }
                      label="Shape"
                      name="Shape"
                      onChange={updateFilter}
                    >
                      <MenuItem value="round">round</MenuItem>
                      <MenuItem value="Acetate">rectangle</MenuItem>
                      <MenuItem value="cat-eye">square</MenuItem>
                      <MenuItem value="cat-eye">cat-eye</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <div>
              <Button
                variant="contained"
                circular={true}
                color="info"
                onClick={handleSubmitFilter}
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
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
