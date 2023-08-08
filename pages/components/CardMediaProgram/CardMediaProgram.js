import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export default function CardMediaProgram({
  ImageSrc,
  altImage,
  title,
  description,
  link,
  code,
}) {
  return (
    <Card sx={{ position: "relative", marginY: 1 }}>
      <Box>
        <Image
          className="apps-images"
          src={ImageSrc}
          alt={altImage}
          width={560}
          height={200}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="filed" size="small" target="_blank" href={link}>
          View
        </Button>
        <Button size="small">Code</Button>
      </CardActions>
    </Card>
  );
}
