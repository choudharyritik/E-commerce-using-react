import { Box, InputLabel, TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
const InputWithLabel = ({ label, placeholder, value, onChange, ...props }) => {
    return (
        <Box mb={"20px"} {...props}>
            <InputLabel
                sx={{
                    fontSize: "13px",
                    fontWeight: "600",
                }}
            >
                {label}
            </InputLabel>
            <TextField
                value={value}
                onChange={onChange}
                sx={{
                    mt: "8px",
                    "& div, & input": {
                        borderRadius: "2px",
                    },
                }}
                placeholder={placeholder}
                size="small"
                fullWidth
            />
        </Box>
    );
};

export default InputWithLabel;
