import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import IncDec from "../ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Rating from '@mui/material/Rating';
import * as React from 'react';
import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';


function ProductDetail({ open, onClose, product }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <Dialog
        TransitionComponent={SlideTransition}
        variant="permanant"
        open={open}
        fullScreen
      >
        <DialogTitle
          sx={{
            background: Colors.secondary,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
          >
            Delicacy Detail
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
            <Product sx={{ mr: 4 }}>
              <ProductImage src={product.image} />
            </Product>
            <ProductDetailInfoWrapper>
              <Typography variant="subtitle">Pizza description</Typography>
              <Typography variant="subtitle">Availability: 5 in basket</Typography>
              <Typography sx={{ lineHeight: 2 }} variant="h4">
                {product.name}
              </Typography>

              <Typography component="legend">Ratings:</Typography>
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />


              <Typography variant="body">
                {product.description}
                {product.description}
                {product.description}
              </Typography>
              <Box
                sx={{ mt: 4 }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <IncDec />
                <Button variant="contained">Add to Cart</Button>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{ mt: 4, color: Colors.light }}
              >
                <FavoriteIcon sx={{ mr: 2 }} />
                Add to wishlist to order next time.
              </Box>
              <Box
                sx={{
                  mt: 4,
                  color: Colors.dove_gray,
                }}
              >
                <FacebookIcon />
                <TwitterIcon sx={{ pl: 2 }} />
                <InstagramIcon sx={{ pl: 2 }} />
              </Box>
            </ProductDetailInfoWrapper>
          </ProductDetailWrapper>
        </DialogContent>
      </Dialog>
    );
  }
//  }

 function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
 }

 const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
 }));

 const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
 }));
export {ProductDetail};