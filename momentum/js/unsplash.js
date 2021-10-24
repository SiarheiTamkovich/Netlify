
async function loadImg() {
  const url = "https://api.unsplash.com/search/photos?query=night&per_page=20&client_id=HLGOyGZNCk_fLHm_pffKIJ3SIrkspDrpIl_zhdjn8pw";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.results)
}
loadImg();


