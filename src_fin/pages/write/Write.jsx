import './write.css';

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="https://images.unsplash.com/photo-1544083098-76551842b5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                     <i className='writeIcon fa-solid fa-plus'></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='Tell Your story .....' 
                    type="text" 
                    className='writeInput writeText'>
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
