import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import apiServices from '../api/apiServices';

    const About = ()=> {
        const [voitures,setVoiture]=useState([]);

        useEffect(()=>{
            const fetchdata = async () => {
                try {
                    const rep = await apiServices.getVoitures();
                    setVoiture(rep);
                } catch (error) {
                    console.log('lol');
                }
            };
            fetchdata();
        },[]);

      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Marque</TableCell>
                <TableCell align="right">Puissance</TableCell>
                <TableCell align="right">Système</TableCell>
                <TableCell align="right">Numéro</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {voitures.map((voiture) => (
                <TableRow
                  key={voiture.idvoiture}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{voiture.idvoiture}</TableCell>
                  <TableCell align="right">{voiture.marquevoiture}</TableCell>
                  <TableCell align="right">{voiture.puissancevoiture}</TableCell>
                  <TableCell align="right">{voiture.systemevoiture}</TableCell>
                  <TableCell align="right">{voiture.numerovoiture}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
};

export default About;