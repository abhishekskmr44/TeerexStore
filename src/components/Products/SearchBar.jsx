import { Form, FormControl } from "react-bootstrap";
import { CartState } from "../../context/Context";

const SearchBar = (props) => {
    const { productDispatch } = CartState();

    const onSearchHandle = (event) => {
        productDispatch({
            type: "FILTER_BY_SEARCH_RESULTS",
            payload: event.target.value,
        });
    };

    return (
        <Form>
            <FormControl
                className="searchInput m-auto"
                type="text"
                placeholder="Search for products..."
                onChange={onSearchHandle}
            />
        </Form>
    );
};

export default SearchBar;