import React, { Component } from 'react';

class Blog extends Component {
    constructor() {
        super()
        this.state = {
            posts : []
        }
        this.getAllPosts = this.getAllPosts.bind(this)
        this.displayPosts = this.displayPosts.bind(this)
        this.getAllPosts()
    }
    
    getAllPosts() {
        // fetch("api/getallposts/")
        // .then(result =>result.json())
        // .then(items=> {
        //     console.log(items)
        //     this.setState({
        //         posts: items
        //     })
        // }
        // )       
    }
    
    displayPosts() {
        return this.state.posts.map(post=><li className="media" key={post.pk}><div className="media-body"><h5 className="mt-0 mb-1 font-weight-bold"> {post.fields.title}</h5>{post.fields.content}</div></li>)
    }
    render() {
         
    return <div id='Home' className="container">
        <ul className="list-unstyled">
            {this.displayPosts()}
        </ul>
    </div>
    }
}

export default Blog;