import React, {Component} from 'react';
import Post from './Post';
import PostEditor  from './PostEditor';

class ThreadDisplay extends Component {
	constructor(props){
		super(props);
		
		this.addPost = this.addPost.bind(this);
		
		this.state = {
			posts: [],
		}
	}
	
	
	addPost(newPostBody){
		const newState = Object.assign({}, this.state);
		newState.posts.push(newPostBody);
		this.setState(newState);

	}

	render (){
		return (
		<div>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>{
			this.state.posts.map((postBody, idx) => {
				return (
					<Post key={idx} postBody={postBody}/>
				)
			}) 
		}
	
		<PostEditor addPost={this.addPost} />
		</div>
		);
	}
}

export default ThreadDisplay;