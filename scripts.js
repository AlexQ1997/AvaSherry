const bodyTag = document.querySelector("body")

barba.use(barbaCss);
// round brckets say do something 
//curly brackets, create something 
// square brackets is a list 
barba.init({
  transitions: [
    {
      name: "fade", 
      once() {},
      //after fade before i leave or enter do this
      beforeEnter ({ current, next, trigger }) {
        //will grab the header a 
        const headerLinks = document.querySelectorAll("header a")
        //will grab the next pages url 
        const href = next.url.path
        //will remove the highlighted navigation
        headerLinks.forEach(link => {
          //if a link is selected add the underline
          if (link.getAttribute("href") === href) { 
            link.classList.add("selected")
           // if not selected remove it 
          } else{
            link.classList.remove("selected")
          }
        })
        
        //before i enter any transition go to top of next page
        window.scrollTo({
          //to ppoistion is 0 
          top: 0, 
          //the scroll is smooth
          behavior: "smooth"
        })
      }
    }
  ],
  views: [
    {
      namespace: "feed",
      // before you enter the feed page change color of that page
      beforeEnter() {
        bodyTag.classList.add("feed")
      },
       // once i leave remove the color for it wont apply to all pages
       beforeLeave() {
          bodyTag.classList.remove("feed")
        }
    }
  ]
})










