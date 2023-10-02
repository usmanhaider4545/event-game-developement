import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const TextFieldComponent = ({ id, label, value, onChange, adornmentIcon, ...otherProps }) => {
    return (
        <TextField
            id={id}
            label={label}
            variant="standard"
            fullWidth
            sx={{
                "& .MuiInputLabel-root": { color: "#fff" },
                borderBottom: "1px solid #fff",
            }}
            InputProps={{
                disableUnderline: true,
                style: { color: "#fff" },
                endAdornment: (
                    <InputAdornment position="end">
                        {adornmentIcon}
                    </InputAdornment>
                ),
            }}
            value={value}
            onChange={onChange}
            {...otherProps}
        />
    );
}

export default TextFieldComponent;
