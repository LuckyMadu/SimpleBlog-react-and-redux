const initState = {
  posts: [
    {
      id: "1",
      title: "Topic1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo consectetur consequatur dolor consequuntur, ut molestiae, eligendi non voluptas rerum, voluptate ab eos maxime voluptates excepturi fugiat voluptatem exercitationem quis!"
    },
    {
      id: "2",
      title: "Topic2",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo consectetur consequatur dolor consequuntur, ut molestiae, eligendi non voluptas rerum, voluptate ab eos maxime voluptates excepturi fugiat voluptatem exercitationem quis!"
    },
    {
      id: "3",
      title: "Topic3",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo consectetur consequatur dolor consequuntur, ut molestiae, eligendi non voluptas rerum, voluptate ab eos maxime voluptates excepturi fugiat voluptatem exercitationem quis!"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  //console.log(action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
