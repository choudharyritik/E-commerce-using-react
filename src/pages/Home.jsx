// import { useContext, useEffect, useState } from "react";
// import { FirebaseContext } from "../context/FirebaseContextProvider";
// import Header from "../components/Header";
import Banner from "../components/Banner";
// import Footer from "../components/Footer";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
// import shirt from "../assets/shirt.jpg";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProduct } from "../slices/productSlice";

const Home = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch(); //
    const { products, loading, error } = useSelector(
        (state) => state.productState
    );
    return (
        <div>
            <Banner />
            <Box
                sx={{
                    px: {
                        xs: "20px",
                        sm: "25px",
                        md: "40px",
                    },
                    pt: {
                        xs: "40px",
                        md: "80px",
                    },
                    pb: {
                        xs: "30px",
                        md: "40px",
                    },
                    width: "100%",
                }}
            >
                <Box>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: "30px",
                                fontWeight: "600",
                                textAlign: "center",
                            }}
                        >
                            NEW COLLECTION
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: "center",
                                mt: "10px",
                                color: "#747272",
                            }}
                        >
                            Our Latest Collection, where classic and
                            contemporary styles converge in <br /> perfect
                            harmony
                        </Typography>
                    </Box>

                    {error && (
                        <Box maxWidth={"600px"} mx={"auto"} mt={2}>
                            {/*  object  */}
                            <Alert severity="error">{error}</Alert>
                        </Box>
                    )}
                    <Box mt={2}>
                        {/* 12 column */}
                        <Grid container minHeight={"300px"}>
                            {products.slice(0, 6).map((product) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <Grid item xs={12} sm={6} lg={4} p="20px">
                                        <ProductCard
                                            product={{
                                                image: product.image,
                                                name: product.productName,
                                                description:
                                                    product.description,
                                                price: product.price,
                                                id: product.id,
                                            }}
                                        />
                                    </Grid>
                                );
                            })}
                            {loading && (
                                <Grid
                                    item
                                    height={"300px"}
                                    display={"flex"}
                                    flex={1}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                >
                                    <ClipLoader color="#000" size={50} />
                                </Grid>
                            )}
                        </Grid>
                        <Box textAlign={"center"} mt={2}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    navigate("/products");
                                }}
                                sx={{
                                    bgcolor: "black",
                                    borderRadius: "0",
                                    paddingBlock: "15px",
                                    ":hover": {
                                        bgcolor: "black",
                                    },
                                }}
                            >
                                View All Product
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
