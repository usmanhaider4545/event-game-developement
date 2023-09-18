import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function GetFinalEstimates() {
 
    const [localStorageCategory, setLocalStorageCategory] = useState(localStorage.getItem("appCategory"));

    const [localStorageIndustry, setLocalStorageIndustry] = useState(localStorage.getItem("industry"));
 
    const parsManDays = JSON.parse(localStorage.getItem("totalManDays"));

    return (

        <Box className="appTable gradientBg">
            <Typography variant='h6' sx={{ color: "#fff", padding: "18px 0", fontWeight: "700", fontSize: "32px" , textAlign : "left"}}>
                {localStorageCategory ? localStorageCategory : ""}-{localStorageIndustry ? localStorageIndustry : ""}
            </Typography>
            <TableContainer component={Paper} sx={{ background: "transparent", boxShadow: "none", maxHeight: 440 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                            <TableCell sx={{ color: "#fff", borderBottom: "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))" }}>Features</TableCell>
                            <TableCell sx={{ color: "#fff", borderBottom: "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))" }} align="left">Estimate (F.E + B.E)</TableCell>
                            <TableCell sx={{ color: "#fff", borderBottom: "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))" }} align="left">Estimate Man-Days</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {parsManDays.map((row , index) => (
                        <TableRow
                            key={row.selectedFeatures}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                                <TableCell sx={{ borderBottom: "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))" }} align="left">{row[0] ? row[0] : "-"}</TableCell>
                                <TableCell sx={{ borderBottom: "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))" }} align="left">{row[1] ? row[1] : "-"}</TableCell>
                                <TableCell sx={{ borderBottom: "1px solid var(--Stroke, rgba(59, 130, 246, 0.54))" }} align="left">{row[2]  ? row[2] + " Days" : "-"}</TableCell>
                         </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Box>

    )

}
export default GetFinalEstimates;