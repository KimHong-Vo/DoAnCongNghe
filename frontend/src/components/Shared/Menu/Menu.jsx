import MenuItem from "./MenuItem"
import items from "./data/menu.json"

export default function Menu(){
    return (
        <div className="menu">
          { items.map((item, index) => <MenuItem key={index} item={item} />) }
        </div>
    )
}