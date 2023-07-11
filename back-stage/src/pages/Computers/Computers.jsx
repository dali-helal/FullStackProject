import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import { FaEdit, FaTrashAlt, FaPlus, FaTimes } from "react-icons/fa"
import ModalComponent from "../../Components/Modal";
import AddComputer from "./AddComputer";

const Computers = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = (e) => {
        setOpen(true)
    }

    const fetchData = () => {
        return axiosClient('/computers').then(({ data }) => data)
    }
    const { data, isLoading } = useQuery({
        queryKey: ["computers"],
        queryFn: () => fetchData()
    })
    if (isLoading) {
        return <h2>loading .... </h2>
    }

    return (

        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Description</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Procesor</TableCell>
                            <TableCell >Memory</TableCell>
                            <TableCell >Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.computers.map((el, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"> {el.name} </TableCell>
                                <TableCell >{el.description}</TableCell>
                                <TableCell >{el.price}</TableCell>
                                <TableCell >{el.procesor}</TableCell>
                                <TableCell >{el.memory}</TableCell>
                                <TableCell >
                                    <FaEdit size={17} color="green" cursor={"pointer"} />
                                    <span>.....</span>
                                    <FaTrashAlt size={17} color="red" cursor={"pointer"} />
                                    <span>.....</span>
                                    <FaPlus size={17} color="black" cursor={"pointer"} onClick={handleOpen} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <ModalComponent open={open} setClose={setOpen} title={"Add New Computer"} Component={AddComputer} />
        </>


    );
}

export default Computers;