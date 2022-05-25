import Header from "../../Header"
import Footer from "../../Footer"
import MerchantMenu from "../../MerchantMenu"
import { Grid } from "@mui/material"

const LayoutDefault = (props)  => {
    return <div>
        <Header></Header>

        <Grid className='Row RowPadding' >
        <MerchantMenu/>

        </Grid>
        {props.children}
        <Footer></Footer>

    </div>
}


export default LayoutDefault
