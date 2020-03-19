import React, {Component} from 'react';
import ThreadDisplay from "./ThreadDisplay";
import Post  from './Post';

class PostEditor extends Component{
	constructor(props){
		super(props);
		this.state = {
			newPostBody:'',
		};
		this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
		this.createPost = this.createPost.bind(this);
	}
	
	handlePostEditorInputChange(ev){
		this.setState({
			newPostBody: ev.target.value
		})
	}
	
	createPost(){
		this.props.addPost(this.state.newPostBody);
		this.setState({
			newPostBody:'',
		});
	}
	
	render(){
		return(
			<div className="panel panel-default post-editor">
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
				<div className="panel-body">
					<textarea className="form-control post-editor-input" onChange={this.handlePostEditorInputChange}/>
					<button className="btn btn-success post-editor-button"onClick={this.addPost}>Post</button>
				</div>
			</div>
		)
	}
}

export default PostEditor;
