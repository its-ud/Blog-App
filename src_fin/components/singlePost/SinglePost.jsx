import './singlePost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBERZbsW2TqOYOqKbokeGx_VOSsl0L4w0pvg&usqp=CAU" 
            alt="" 
            className="singlePostImg" 
            />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <div className="singlePostEdit">
                    <i class="singlePostIcon far fa-pen-to-square"></i>
                    <i class="singlePostIcon far fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Utkarsh</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet dolore culpa quaerat, ipsa voluptates beatae qui laboriosam. Praesentium recusandae, minus vero quos corporis omnis voluptate eveniet accusantium quam perspiciatis?
            </p>
        </div>
     </div>
  )
}
