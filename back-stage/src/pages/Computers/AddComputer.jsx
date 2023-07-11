import { Box, TextField, FormControl, Stack } from "@mui/material"

const AddComputer = () => {
    return (

        <>
            <form className="add-computer-form" autoComplete="off">
                <Stack spacing={2} direction="column">
                    <Stack spacing={2} direction="row">
                        <TextField label="Email 1" type="email" fullWidth />
                        <TextField label="Password 1" type="password" fullWidth />
                    </Stack>

                    <Stack spacing={2} direction="row">
                        <TextField label="Email 2" type="email" fullWidth />
                        <TextField label="Password 2" type="password" fullWidth />
                    </Stack>
                </Stack>
            </form>
        </>);
}

export default AddComputer;