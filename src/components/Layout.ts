import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <>
        <AppBar position= "static" >
        <Toolbar>
        <Typography variant="h6" > Roof Care </Typography>
            </Toolbar>
            </AppBar>
            < Container sx = {{ mt: 2 }
}> { children } </Container>
    </>
  );
};

export default Layout;
