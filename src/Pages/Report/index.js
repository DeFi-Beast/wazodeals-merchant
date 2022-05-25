import React from 'react'
import CampaignMenu from '../../Components/CampaignMenu'
import LayoutDefault from '../../Components/Layouts/LayoutDefault'
import Chart from '../../Components/Chart'
import SaleChart from '../../Components/Chart/saleChart'

const Report = () => {
  return (
    <LayoutDefault>
     
      <Chart/>
      <SaleChart/>
    </LayoutDefault>
  )
}

export default Report