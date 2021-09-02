import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    const {isPending, error, data: blog} = useFetch('http://localhost:5000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:5000/blogs/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
            )}
        </div>
     );
}
 
export default BlogDetails;