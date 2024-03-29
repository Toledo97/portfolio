'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormProps } from "@/app/lib/definitions";
import { mono, inconsolata } from '@/app/ui/fonts';
import Brightness1Icon from '@mui/icons-material/Brightness1';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const bands = [
    ["Black", 0], ["Brown", 1], ["Red", 2],
    ["Orange", 3], ["Yellow", 4], ["Green", 5],
    ["Blue", 6], ["Violet", 7], ["Grey", 8],
    ["White", 9],
]

const multiplier = [
    ["Black", "0"], ["Brown", "10"], ["Red", "10^2"],
    ["Orange", "10^3"], ["Yellow", "10^4"], ["Green", "10^5"],
    ["Blue", "10^6"], ["Violet", "10^7"], ["Grey", "10^8"],
    ["White", "10^9"], ["Gold", "10^-1"], ["Silver", "10^-2"],
]

const tolerance = [
    ["Brown", "1%"], ["Red", "2%"], ["Green", "0.5%"],
    ["Blue", "0.25"], ["Violet", "0.10%"], ["Grey", "0.05"],
    ["Gold", "5%"], ["Silver", "10%"],
]

export function AccordionExpandDefault(props: FormProps) {
    return (
    <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>{props.title}</Typography>
          </AccordionSummary>
          
            <ResistorFrom/>
          
        </Accordion>
    </div>
  );
}

function ResistorFrom(){

    const [checked, setCheck] = React.useState(false);
    const [color1, setColor1] = React.useState('');
    const [color2, setColor2] = React.useState('');
    const [color3, setColor3] = React.useState('');
    const [color4, setColor4] = React.useState('');
    const [color5, setColor5] = React.useState('');

    const handleChecked = () => {
        setCheck(prevState => !prevState);
        setColor3('');
    }

    return(
        <div className="m-auto overflow-clip shadow rounded p-4 bg-gray-100">    
            <div className=" relative flex w-full flex-col">
                <div className=" z-10 flex flex-col flex-wrap flex-wrap">
                    <form className="flex flex-col gap-2">
                        <label>
                            <input className={`${inconsolata.className} mx-3`} type="checkbox" onChange={handleChecked}/> 5-Band Resistor
                        </label>

                        { DropDown("First Band", bands, color1, setColor1) }
                        { DropDown("Second Band", bands, color2, setColor2) }
                        { checked && (DropDown("Third Band", bands, color3, setColor3)) }
                        { DropDown("Multiplier", multiplier, color4, setColor4) }
                        { DropDown("Tolerance", tolerance, color5, setColor5) }
                        
                        <input className="shadow rounded py-1 bg-gray-50 hover:bg-sky-100 hover:text-blue-600" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        );
}

function DropDown (title:String, dataIn, color, setColor) {

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300, mt: 2 }}>
                <InputLabel id="demo-select-large-label" >{title}</InputLabel>
                <Select
                    labelId="demo-select-large-label"
                    id="demo-select-large"
                    value={color}
                    label={title}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {/* sx={{backgroundColor: "black"} */}
                    {dataIn.map((selection,idx) => {
                        
                        return(
                            <MenuItem key={idx} className={`${inconsolata.className} `} value={selection[1]} > 
                                
                            <div className={`flex flex-row gap-2 `}>
                                <Brightness1Icon style={{ color: selection[0]}}/>
                                {
                                    selection[0] 
                                }
                            </div>
                            </MenuItem>   
                        );
                    })}
                </Select>
            </FormControl>
        </div>
      );
}



export const ContactUs = () => {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
// service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 
'YOUR_PUBLIC_KEY')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};

return (
<form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>
);
};