import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown(props) {
  const [selected, setSelected] = React.useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 80 }}>
        <Select
          id="demo-simple-select-autowidth"
          value={selected}
          onChange={handleChange}
          autoWidth
          style={{ height: "40px", border: "none", outline: "none" }}
        >
          {props.options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
