import profileReducer, { addPost, deletePost } from './profile-reducer';
import React from 'react';

let state = {
    posts: [
        { id: '1', message: 'Hi, how are you?', likesCount: 13 },
        { id: '2', message: '123', likesCount: 19 },
        { id: '3', message: 'dddddddddd', likesCount: 121 },
        { id: '4', message: 'gdsgsdgsgsgs', likesCount: 1245 },
        { id: '5', message: 'IccccxDDDx', likesCount: 9 }
    ]
};
it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost('test-profile-red');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation 
    expect(newState.posts.length).toBe(6);
  });
it('message of new posts should be correct', () => {
    // 1. test data
    let action = addPost('test-profile-red');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation 
    expect(newState.posts[5].message).toBe('test-profile-red');
  });
it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation 
     expect(newState.posts.length).toBe(4);
  });
it('after deleting length shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(9);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation 
     expect(newState.posts.length).toBe(5);
  });
  