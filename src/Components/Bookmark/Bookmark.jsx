
import PropTypes from 'prop-types'
import BMark from '../BMark/BMark';
const Bookmark = ({bookmarks,readingtime}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 rounded-lg ml-4 mt-2 p-t-4">
            <div className='text-3xl font-bold text-center mt-3 mb-3 bg-slate-100 p-3 m-3 rounded-lg'>Reading Time:{readingtime}</div>
            <h3 className='text-center text-3xl  mt-2 font-bold'>Bookmarked Read:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark =><BMark key={bookmark.id} bookmark={bookmark}></BMark>)
            }
        </div>
    );
};
Bookmark.propTypes ={
    bookmarks:PropTypes.array.isRequired,
    readingtime:PropTypes.number
}

export default Bookmark;