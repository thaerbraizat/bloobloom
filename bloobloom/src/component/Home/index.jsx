import React from "react";
import Styles from "./Home.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export default function Home() {
  const navigate = useHistory();

  const handleClick =(flag)=>{
    if (!flag) {
      navigate.push("/spectacles-women");
      window.location.reload();
    } else {
      navigate.push("/spectacles-men");
      window.location.reload();
    }
  }

  return (
    <div className={Styles.containerImage}>
      <div>
        <Card>
          <CardMedia
            component="img"
            image="https://media.gq-magazine.co.uk/photos/5d13a048f7cb38e1e9112dcd/1:1/w_1169,h_1169,c_limit/image.jpg"
            alt="green iguana"
          />
          <CardActions className={Styles.cardActionCustom}>
            <Button size="large" variant="outlined" color="secondary" onClick={()=>{handleClick(true)}}>
              Men
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card>
          <CardMedia
            component="img"
            image="https://media1.popsugar-assets.com/files/thumbor/MbcNE0TpHHxrNzxFtLp74iDarKs/202x187:1914x1899/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/09/808/n/1922398/a624a8f35dee915d91b2c9.78966693_/i/Charlize-Theron.jpg"
            alt="green iguana"
          />

          <CardActions className={Styles.cardActionCustom}>
            <Button size="large" variant="outlined" color="secondary" onClick={()=>{handleClick(false)}}>
              Women
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
