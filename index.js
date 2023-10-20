// const accessKey="mKvyvVDCgJw0X_BhXYJCdRmwUFhs-l39ochecedoXcw";
// const btnsearch = document.querySelector(".btnsearch");
// const textarea = document.querySelector(".textarea");

// const text_field=document.querySelector(".text_field");
// const search_result=document.querySelector(".search-result");
// const show_more=document.querySelector("#show-more");
// const searchform=document.querySelector("#search-form");
// btnsearch.addEventListener('click', searchImages);
 
//   let keyword="";
//  let page=1;
//  async function searchImages(){
//     keyword=text_field.value;
//     const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
//     const response= await fetch(url);
//     const data=await response.json();
//     const results= data.results;
//     results.map((result) => {
//       const image = document.createElement("img");
//       image.src=result.urls.small;
//       const imageLink = document.createElement("a");
//       imageLink.href= result.links.html;
//       imageLink.target="_blank";
//       imageLink.appendChild(image);
//       search_result.appendChild(imageLink);

//     })
//  }

//  searchform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     page=1;
//     searchImages();
//  });












// // btnsearch.addEventListener('click',searchImages);
// // let keyword="tech";
// // let page=1;
// // function search(){
// //    console.log(keyword);
// // }
// // async function searchImages(){
// //    keyword=text_field.value;
// //    const url=`https://api.unsplash.com/search/photos?page=${page}&query={keyword}&client_id=${accessKey}`;
// //    const response= await fetch(url);
// //    const data=await response.json();
// //    // console.log(data);
// //    const results=data.results;
// //     results.map((result)=>{
// //       const image=document.createElement("img");
// //       image.scr=result.urls.small;
// //       const link= document.createElement("a");
// //     })
// // }

// // teaxtarea.addEventListener("submit",(e)=>{
// //    e.preventDefault();
// //    page=1;
// //    searchImages();
// // })



const accessKey = "mKvyvVDCgJw0X_BhXYJCdRmwUFhs-l39ochecedoXcw";
const btnsearch = document.querySelector(".btnsearch");
const textarea = document.querySelector(".textarea");
const text_field = document.querySelector(".text_field");
const search_result = document.querySelector(".search-result");
const searchform = document.querySelector("#search-form");
let keyword = "";
let page = 1;

btnsearch.addEventListener('click', searchImages);

async function searchImages() {
    keyword = text_field.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        search_result.appendChild(imageLink);
    })
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
