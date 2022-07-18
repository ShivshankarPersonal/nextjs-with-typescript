import  React, {useState, useEffect} from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import { useForm, SubmitHandler,Controller } from "react-hook-form";
// import Select from "react-select";
import TextField from '@mui/material/TextField';
// import LoadingButton from '@mui/lab/LoadingButton';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';


const About: NextPage = () => {
  interface IFormInput {
    firstName: string;
    lastName: string;
    iceCreamType: {label: string; value: string };
  }
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)
    try {
      const res = await fetch('http://localhost:3000/api/postapi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({firstName:'abc'}),
      }); 
      console.log(await res)
      // debugger
      const nameObj = await res.json()
      console.log(nameObj)
      // setName(nameObj);
      
      // setPosts(res.data);
  } catch (err) {
      console.log(err);
  }
  };
  useEffect( () => { 
    async function fetchData() {
        // try {
        //     const res = await fetch('http://localhost:3000/api/postapi', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({name:'abc'}),
        //     }); 
        //     // debugger
        //     const nameObj = await res.json()
        //     // setName(nameObj);
            
        //     // setPosts(res.data);
        // } catch (err) {
        //     console.log(err);
        // }
    }
    fetchData();
}, []);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Forms
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} />}
      />
      {/* <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      /> */}
      <Button variant="contained" type="submit" />
      {/* <LoadingButton  variant="outlined">
        Submit1222
      </LoadingButton> */}
    </form>
      </Box>
    </Container>
  );
};

export default About;
