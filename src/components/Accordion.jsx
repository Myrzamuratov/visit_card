import * as React from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function AccordionElem({ item }) {
  return (
    <Accordion
      sx={{
        margin: "10px 0",
        padding: "10px 3px",
        borderRadius: "15px",
        width: "310px",
        background:
          "linear-gradient(90deg, rgba(33, 150, 243, 1) 0%, rgba(3, 169, 244, 1) 50%, rgba(103, 58, 183, 1) 100%)",
        color: "#f2f2f2",
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Box
          sx={{
            width: "300px",
            textAlign: "center",
            height: "30px",
            paddingBottom: "10px",
          }}
        >
          <Typography>{item.name1}</Typography>
          <Typography>{item.name2}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ width: "300px", padding: "5px" }}>
        <ul
          style={{
            width: "300px",
            padding: "0",
            textAlign: "start",
            paddingLeft: "25px",
          }}
        >
          {item.elements.map((elem, index) => (
            <li
              style={{
                width: "250px",
                margin: "3px 0",
              }}
              key={index}
            >
              {elem}
            </li>
          ))}
        </ul>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              display: "flex",
              color: "#ffffcc",
              justifyContent: "start",
              fontWeight: "bold",
            }}
          >
            <LocalOfferIcon />
            {item.price}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              color: "#90EE90",
              justifyContent: "end",
              fontWeight: "bold",
            }}
          >
            <AccessTimeIcon />
            {item.time}
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
