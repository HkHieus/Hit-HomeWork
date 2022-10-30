gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.from("#slider",{
    opacity : 0 ,
    duration : 2 ,
    delay : 0.3,
})

gsap.to(".content__title" , {
     scrollTrigger : {
        trigger : ".content__title" ,
        start : "top bottom-=300px" ,
        end : "bottom 80%" ,
        //markers : true ,
        pin : true ,
        scrub : true , 
        //toggleActions :"play pause reverse none"
        end : "+=30%" , 
        pinSpacing : false ,
     },
     x: () => window.innerWidth / 2 - 100,
     y : -214 ,
     duration : 2 , 
     transformOrigin: "left", 
     ease: "none" ,
}) 

gsap.from(".content__main--detail",{
    scrollTrigger : ".content" ,
    stagger : 1.5 ,
    opacity : 0 ,
    duration : 1.5 ,
    scale : 1.2 ,
})

gsap.to(".footer",{
  scrollTrigger : {
    trigger : ".footer" ,
    //markers : true ,
    start : "bottom bottom",
  },
  text:{
    value : "Contact <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>me</a>",
    newClass : "footer__text" ,
  } ,
  backgroundColor : "#9e4244" ,
  duration : 2 ,
  delay : 1 ,
})
