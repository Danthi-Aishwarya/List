(()=>{const e=document.querySelector(".todo-input"),t=document.querySelector(".add-button"),n=document.querySelector(".todos"),o=document.querySelector(".empty-image"),l=document.querySelector(".delete-all"),a=document.querySelectorAll(".filter");let s=JSON.parse(localStorage.getItem("todos"))||[],c="";function i(e,t){if(c&&c!==e.status)return"";let n="completed"===e.status?"checked":"";return`\n    <li class="todo">\n      <label for="${e.id}">\n        <input id="${e.id}" type="checkbox" ${n} onclick="updateStatus(event)">\n        <span class="${n}">${e.name}</span>\n      </label>\n      <button class="delete-btn" data-index="${t}" onclick="remove(event)">\n        <i class="fa fa-times"></i>\n      </button>\n    </li>\n  `}function d(){const e=s.filter((e=>!c||e.status===c));0===e.length?(n.innerHTML="",o.style.display="block"):(n.innerHTML=e.map(i).join(""),o.style.display="none")}function r(){let t=e.value.trim();t&&(s.unshift({id:Date.now(),name:t,status:"pending"}),localStorage.setItem("todos",JSON.stringify(s)),e.value="",d())}d(),e.addEventListener("keyup",(e=>{"Enter"===e.key&&r()})),t.addEventListener("click",r),a.forEach((e=>{e.addEventListener("click",(()=>{c=e.dataset.filter,a.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),d()}))})),l.addEventListener("click",(()=>{s=[],localStorage.setItem("todos",JSON.stringify(s)),d()}))})();