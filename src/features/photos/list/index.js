import { useSelector, useDispatch } from 'react-redux';
import { removePhoto } from '../photos.slice';
import {selectSearchTerm} from "../../search/search.slice"; // Adjust import as necessary
import './list.css';
export default function PhotoList() {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos.photos); // Adjust if using different slice
    const searchTerm = useSelector(selectSearchTerm);

    const filteredPhotos = photos.filter(photo =>
        photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteButtonClick = (id) => {
        dispatch(removePhoto(id));
    };

    const photosListItems = filteredPhotos.map(({ id, caption, imageUrl }) => (
        <li key={id}>
            <img alt={caption} src={imageUrl} />
            <div>
                <p>{caption}</p>
                <button
                    data-testid={`${caption}-button`}
                    onClick={() => handleDeleteButtonClick(id)}>
                    Delete
                </button>
            </div>
        </li>
    ));

    return photosListItems.length > 0 ? (
        <ul >{photosListItems}</ul>
    ) : (
        <h3>No doggies to display...</h3>
    );
}
