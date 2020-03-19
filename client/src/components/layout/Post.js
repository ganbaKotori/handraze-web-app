import React from 'react';
import ThreadDisplay from "./ThreadDisplay";
import PostEditor  from './PostEditor';


const Post = (props) => (

	<div className="panel panel-default">
		<div className="panel-body">
			{props.postBody}
		</div>
	</div>
)

export default Post;
