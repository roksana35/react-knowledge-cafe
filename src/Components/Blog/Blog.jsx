import PropTypes from 'prop-types';

const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const {title,cover,author_img,author,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-[900px] mb-8 h-[450px] rounded-lg' src={cover}></img>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img}></img>
                    <div className='ml-6 text-center'>
                    <h3>{author}</h3>
                    <p>{posted_date}</p>

                    </div>
                </div>
                <div className='flex gap-2'>
                    <small>{reading_time} min read</small>
                    <button className='bg-slate-100 p-2 rounded-lg' onClick={()=>handleAddBookmark(blog)}>Mark</button>

                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p className='flex gap-2'>
                {
                    hashtags.map((hash,index) =><span key={index}><a>#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;