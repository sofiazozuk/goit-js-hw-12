import{i as c,a as L,S as b}from"./assets/vendor-951421c8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="/goit-js-hw-12/assets/x-octagon-2f098169.svg",n=document.querySelector(".data-select"),p=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),l=document.querySelector(".add-button");let h,a=1,u;const d=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1}),v=d.get("per_page");n.addEventListener("submit",o=>{o.preventDefault(),m.classList.toggle("active"),l.classList.add("active"),h="";const i=n.elements.request.value.trim();p.innerHTML="",a=1,d.set("page",a),h=i,y(i).then(({data:r})=>{F(r)}).catch(()=>{c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{m.classList.toggle("active"),a<=u&&l.classList.remove("active"),n.reset()})});async function y(o){return await L.get(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${o}&${d}`)}function F(o){u=Math.ceil(o.totalHits/v),o.totalHits<=0?c.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1}):a>u&&c.error({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#91e3fa",iconUrl:g,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1});const i=o.hits.map(t=>`<li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${t.webformatURL}"
		          alt="${t.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${t.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${t.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${t.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${t.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");p.insertAdjacentHTML("beforeend",i),new b(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}l.addEventListener("click",o=>{o.preventDefault(),m.classList.toggle("active"),l.classList.add("active"),a+=1,d.set("page",a),y(h).then(({data:i})=>{F(i);const t=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:t,left:0,behavior:"smooth"})}).catch(()=>{c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{m.classList.toggle("active"),a<=u&&l.classList.remove("active"),n.reset()})});
//# sourceMappingURL=commonHelpers.js.map
