const initState = {
  posts: [
    {
      id: 1,
      title: "Topic1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo consectetur consequatur dolor consequuntur, ut molestiae, eligendi non voluptas rerum, voluptate ab eos maxime voluptates excepturi fugiat voluptatem exercitationem quis!"
    },
    {
      id: 2,
      title: "Topic2",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo consectetur consequatur dolor consequuntur, ut molestiae, eligendi non voluptas rerum, voluptate ab eos maxime voluptates excepturi fugiat voluptatem exercitationem quis!"
    },
    {
      id: 3,
      title: "Topic3",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo consectetur consequatur dolor consequuntur, ut molestiae, eligendi non voluptas rerum, voluptate ab eos maxime voluptates excepturi fugiat voluptatem exercitationem quis!"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
