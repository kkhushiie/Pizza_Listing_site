import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="https://www.pngarts.com/files/3/Pizza-PNG-Photo.png" />
      <BannerContent>
        <Typography variant="h6">Best Collection</Typography>
        <BannerTitle variant="h2">
          New Pizzas
        </BannerTitle>

        <BannerDescription variant="subtitle">
        "Welcome to our pizzeria, where every slice is a taste of heaven!"
        </BannerDescription>

        <BannerShopButton color="primary">Order Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
