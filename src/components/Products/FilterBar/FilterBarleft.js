import { Card } from "react-bootstrap";
import FilterList from "./FilterList";

const FilterBar = (props) => {
    return (
        <Card className="bg-secondary text-dark" style={{ fontSize: "99%" }}>
            <Card.Body>
             
                <Card.Title className="mb-3">
                   <h3>Filter</h3>
                </Card.Title>
                <FilterList filters={props.filters} id="filters" />
             
             </Card.Body>
        </Card>
    );
};


export default FilterBar;