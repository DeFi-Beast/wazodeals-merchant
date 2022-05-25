import React from 'react'
import CreateCampaignMenu from '../../Components/CreateCampaignMenu'
import LayoutDefault from '../../Components/Layouts/LayoutDefault'
import { Grid } from "@mui/material";
import Form from '../../Components/Form/Form';
import { useParams } from 'react-router-dom';



const CreateCampaign = () => {

    const {id} = useParams()
  return (
    <LayoutDefault>
        <Grid container sm={11} m="0 auto">
      <h1>{id ? "Edit": "Create A New" } Campaign</h1>
      <CreateCampaignMenu />
     <Form currentId={id}/>
    
    </Grid>
    </LayoutDefault>
  )
}

export default CreateCampaign