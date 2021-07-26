import React from 'react'
import "./write.css"
import imageNew from '../../img/ilham.jpg'


export default function Write() {
    return (
        <div className="container mt-2">
            <img className="imageNew" src={imageNew} alt=""  />
        <form>
        <div className="form-group">
          <label for="exampleFormControlFile" style={{cursor:"pointer"}} >Add Image</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile" style={{display:"none"}}/>
        </div>
        <div className="form-group">
    
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Title.."/>
        </div>
        <div className="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your story..." ></textarea>
            
        </div>
        <button type="submit" class="btn btn-primary">Publish</button>
      </form>
      </div>
    )
}
