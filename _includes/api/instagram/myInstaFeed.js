var feed = new Instafeed({
  target: 'instagram',
  get: 'user',
  userId: 2072327,
  //userId: 219101648,
  accessToken: '2072327.1677ed0.4cc07186a7a047d9b26edfa23dea60a5',
  clientId: 'de2bb2d0384d4f1195c27e61cfd5d594',
  resolution: 'standard_resolution',
  template: '<div class="col-xs-6 col-sm-6 col-md-4" style="margin-bottom:3rem;"><article><a href="{{link}}" target="_blank"><div class="image-frame"><img class="desaturated" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiPgogIDxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIHg9IjI3MyIgeT0iNDQyIiBmaWxsPSIjRjNGM0YzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzMgLTQ0MikiLz4KPC9zdmc+Cg=="data-src="{{image}}" alt="{{caption}}"/></div></div></a></article></div>',
  limit: 6,
  sortBy: 'random',
  link: 'true'
  // after: function () {
  //   // run lazyloader
  //   lazerLoaderPlugin.initialize();
  // }
});

feed.run();


console.log('carregando insta');