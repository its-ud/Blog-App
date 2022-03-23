import './post.css'
export default function Post() {
  return (
    <div className='post'>
        <img 
            className='postImg' 
            src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-blog-illustration.png?format=jpg&quality=90&v=1595363254&width=1024" 
            alt="" 
        />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quas soluta sunt voluptatum fuga, reprehenderit officiis! Quibusdam odio explicabo atque eum? Quas minus quidem facere? Id sapiente pariatur ex dolore?
        </p>
    </div>
  )
}
