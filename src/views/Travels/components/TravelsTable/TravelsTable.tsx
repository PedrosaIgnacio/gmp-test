import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { TableContentTravels, TableHeader } from './data'

export const TravelsTable = () => {
  return (
    <TableContainer component={Paper}>
    <Table>
        <TableHead>
          <TableRow>
            {
              TableHeader.map((item) => {
                return(
                <TableCell>
                  {item.name}
                </TableCell>
                )
              })
            }
          </TableRow>

        </TableHead>
      <TableBody>
        {
          TableContentTravels.map((row) => {
            return(
              <TableRow>
                <TableCell>
                  {row.nroViaje}
                </TableCell>
                <TableCell>
                  {row.destino}
                </TableCell>
                <TableCell>
                  {row.kms}
                </TableCell>
                <TableCell>
                  {row.fecha}
                </TableCell>
                <TableCell>
                  {row.horarioSalida}
                </TableCell>
                <TableCell>
                  {row.horarioDestino}
                </TableCell>

              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
    </TableContainer>
  )
}
