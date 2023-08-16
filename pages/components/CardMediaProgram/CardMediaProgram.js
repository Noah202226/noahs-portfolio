import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React from "react";
import Image from "next/image";
import { Box, Grid, Stack } from "@mui/material";

export default function CardMediaProgram({
  ImageSrc,
  altImage,
  title,
  description,
  link,
  code,
  techUsedArray,
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
        <Grid container mx={2}>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom variant="h6" component="div">
              Technology I used
            </Typography>

            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {techUsedArray?.map((tech) => (
                <Typography>{tech}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack
              flexDirection={"row"}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
              height={"100%"}
            >
              <Button variant="filed" size="small" target="_blank" href={link}>
                View
              </Button>
              <Button size="small">Code</Button>
            </Stack>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
