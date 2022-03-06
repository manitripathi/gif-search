import React from 'react';
import PostMessage from './PostMessage';
import TogglePostButton from './TogglePostButton';

function PostBlock() {
    return (
        <div className='PostBlock'>
            <TogglePostButton/>
            <PostMessage/>  
            
        </div>
    );
}

export default PostBlock;