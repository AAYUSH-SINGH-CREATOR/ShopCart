

export default function Product({post}){

    return(
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} alt="" />
            </div>
            <div>
                <div>
                    <p>{post.price}</p>
                </div>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}