import { useDispatch, useSelector } from 'react-redux';
import './search-bar.css';
import {selectSearchTerm, setSearchTerm} from "../search.slice";

export default function SearchBar() {
    // Task 10: Store a reference to the Redux store's dispatch method in a variable called `dispatch`
    const dispatch = useDispatch();

    // Task 11: Retrieve the searchTerm from the Redux store
    const searchTerm = useSelector(selectSearchTerm);

    function handleChange({ target: { value } }) {
        // Task 11: Dispatch the `setSearchTerm()` action creator, passing in the value of the search input
        dispatch(setSearchTerm(value));
    }

    return (
        <form className="search-bar">
            <label htmlFor="search">Search by caption: </label>
            <input
                id="search"
                name="search"
                onChange={handleChange}
                placeholder="e.g., terrier"
                type="search"
                value={searchTerm}
            />
        </form>
    );
}
