const initState =  {
  Anime: [
    [{
      name: 'Anon',
      date: Date.now(),
      id: 11234,
      img: 'https://www.nihilist.li/wp-content/uploads/2019/06/Naruto_Part_1.png',
      comment: 'Desu desu?'
    }], [{
      name: 'Anon',
      date: Date.now(),
      id: 11254,
      img: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/JoJos_Bizarre_Adventure.jpg',
      comment: 'desu!'
    }], [{
      name: 'Anon',
      date: Date.now(),
      id: 1123454,
      img: 'https://i.pinimg.com/originals/36/f6/8a/36f68a488c9956a153f10940432b7a07.jpg',
      comment: 'ok, desu'
    }],
  ],
  B: [
    [{
      name: 'Anon',
      date: Date.now(),
      id: 11234,
      img: 'https://i.gifer.com/origin/f6/f6f9367d4bd2087b9862d7a58f14a12c_w200.gif',
      comment: 'you are a fag'
    }, {
      name: 'Anon',
      date: Date.now(),
      id: 11254,
      img: 'https://i.kym-cdn.com/entries/icons/facebook/000/000/266/no_u_for_knowyourmeme.jpg',
      comment: 'no you'
    },  {
      name: 'Anon',
      date: Date.now(),
      id: 1123454,
      img: 'https://i.kym-cdn.com/entries/icons/facebook/000/000/266/no_u_for_knowyourmeme.jpg',
      comment: 'no you, sweetie'
    }], [{
      name: 'Anon',
      date: Date.now(),
      id: 1123554,
      img: 'https://i.gifer.com/origin/f6/f6f9367d4bd2087b9862d7a58f14a12c_w200.gif',
      comment: 'you are a fag'
    }, {
      name: 'Anon',
      date: Date.now(),
      id: 11254,
      img: 'https://i.kym-cdn.com/entries/icons/facebook/000/000/266/no_u_for_knowyourmeme.jpg',
      comment: 'no you'
    },  {
      name: 'Anon',
      date: Date.now(),
      id: 1123454,
      img: 'https://i.kym-cdn.com/entries/icons/facebook/000/000/266/no_u_for_knowyourmeme.jpg',
      comment: 'no you, sweetie'
    }]
  ],
  Music: [
    [{
      name: 'Anon',
      date: Date.now(),
      id: 11235,
      img: 'https://images.unian.net/photos/2020_02/1582624811-7454.jpg?0.4451035283190248',
      comment: 'Grimes?'
    }, {
      name: 'Anon',
      date: Date.now(),
      id: 11254,
      img: 'https://www.peoples.ru/art/music/rock/sisters_of_mercy/sisters_sistersofmercy1.jpg',
      comment: 'Sisters?'
    },  {
      name: 'Anon',
      date: Date.now(),
      id: 1123454,
      img: 'https://www.biography.com/.image/t_share/MTQ3NTI2NTg2OTE1MTA0MjM4/kenrick_lamar_photo_by_jason_merritt_getty_images_entertainment_getty_476933160.jpg',
      comment: 'Kendrick'
    }], [{
      name: 'Anon',
      date: Date.now(),
      id: 11234,
      img: 'https://images.unian.net/photos/2020_02/1582624811-7454.jpg?0.4451035283190248',
      comment: 'Grimes?'
    }, {
      name: 'Anon',
      date: Date.now(),
      id: 11254,
      img: 'https://www.peoples.ru/art/music/rock/sisters_of_mercy/sisters_sistersofmercy1.jpg',
      comment: 'Sisters?'
    },  {
      name: 'Anon',
      date: Date.now(),
      id: 432234,
      img: 'https://www.biography.com/.image/t_share/MTQ3NTI2NTg2OTE1MTA0MjM4/kenrick_lamar_photo_by_jason_merritt_getty_images_entertainment_getty_476933160.jpg',
      comment: 'Kendrick?'
    },  {
      name: 'Anon',
      date: Date.now(),
      id: 235523,
      img: 'https://i0.wp.com/sova.ponominalu.ru/wp-content/uploads/2018/03/lisland.jpg?fit=1280%2C720&ssl=1',
      comment: 'The Lonely Island?'
    },  {
      name: 'Anon',
      date: Date.now(),
      id: 235235,
      img: 'https://ichef.bbci.co.uk/news/1024/branded_news/E977/production/_107376795_cohen1_bbc.jpg',
      comment: 'Cohen?'
    }]
  ]
}



const theards = (state = initState, action) => {
  if (action.type === 'ADD_POST') {
    const keys = Object.keys(state)
    keys.forEach(key => {
      state[key].forEach(itemThread => {
        if (itemThread[0].id === action.postBean.opId) {
          itemThread.push(action.postBean.post)
        }
      });
    });
    return Object.assign({}, state);
  } else if (action.type === 'ADD_THREAD') {
    state[action.post.boardName].push([action.post.thread]);
    return Object.assign({}, state);
  }
  return state;
}

export default theards;
