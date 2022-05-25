import React from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css"
import { Link } from "react-router-dom";








const MerchantFaq = () => {
  return (
    <UserLayout>
      <div className="Row RowPadding Faq">
      <Link to="/account-settings">Back To Profile</Link>

        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>1- HOW CAN I SELL MY PRODUCTS ON WAZODEAL ?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            1-Register on seller.wazodeal.com for easiest way to sell one or thousands items/services

            </Typography>
            <Typography>
            2- Choose a POINTS plan based on your needs from your dashboard and you can purchase any plan of your choice 


            </Typography>
            <Typography>
            
            3- select campaign type and create your products campaigns or listing 

            </Typography>
            <Typography>
            
            4- Cross check every word and offer before submitting then click on Submit 
            </Typography>
            <Typography>
5- Fulfil order or offers as promoted as quick as possible when the customers purchase or order.
            

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>2- WHAT CAN I SELL ON WAZODEAL ?</h3>

          

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            1- You can sell virtually alot of things but what you can sell depends on what you are selling and it sub-categories
</Typography>


          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>3- 

WHAT ITEMS/PRODUCTS CAN'T BE SOLD ON WAZODEAL ?

            </h3>

          

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            
1- Items/Products like Prescription drugs, Alcohol, Tobacco, Cigarettes, weapons which includes (firearms, ammunitions, knives, gun parts) Psychotropic substances, narcotics, intoxicants, and any other harmful substances prohibited by Nigerian Govt, Cocaine, stolen Products, copyright claim, etc 
            
            </Typography>


          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             4- HOW DO I REGISTER ON WAZODEAL ?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            
            1-To get started as a Wazodeal Seller/Merchants  begin by creating an account on seller.wazodeal.com then click on account settings to create your profile with these details:- Merchant name, Merchant email, Merchant phone number, Registered company name, office address, business representative/manager full details, CAC registration details, Bank details for settlements etc.

            </Typography>
            <Typography>
            2- Buy a point plan from your dashboard using your card, bank transfer or any other payment channels provided on the website 
            </Typography>
            <Typography>
            3- Click on campaign to fill and start a campaign.

            </Typography>
         
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             5-  HOW MUCH DOES IT COST TO SELL OR PROMOTE ON WAZODEAL ?
            


            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            
It's only cost you #30 naira per points meaning for a #1500 naira purchase of wazopoints you get 50 POINTS and this point would be used in charging you for a click on listed Coupons, and a charge for Cashbacks in case of online deals and orders and a charge for receipts uploaded when a customer purchase an item and qualifies for a reward from your store(s).
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        
       
      </div>
    </UserLayout>
  );
};

export default MerchantFaq;
