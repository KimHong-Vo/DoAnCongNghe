import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

export default function DropDown(props) {
  const [selected, setSelected] = React.useState();

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
              <Link className="no-underline" to = {`/workspacedetail/${option.id}`}>
              {option.name}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
