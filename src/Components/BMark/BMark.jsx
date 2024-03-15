
import PropTypes from 'prop-types'
const BMark = ({bookmark}) => {
    const {title}=bookmark;

    return (
        <div>
            <h3 className='text-2xl bg-slate-100 p-2 m-2 rounded-lg'>{title}</h3>
        </div>
    );
};
BMark.propTypes ={
    bookmark:PropTypes.object.isRequired
}

export default BMark;