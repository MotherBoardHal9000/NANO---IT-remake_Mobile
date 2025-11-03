

if (matchMedia("only screen and (max-width: 768px)").matches){
        let mobileSideMenu = document.getElementById("mobileSideMenu");
      let popupOn = document.getElementById("mobile_gnb_Btn");
      let popupOff = document.getElementById("mobile_gnb_Btn_Off");
      let isSel = true;

      popupOn.addEventListener("click", onClick);
      popupOff.addEventListener("click", onClick);

      function onClick(addEventListener) {
        console.log("click");

        if (isSel == true) {
          isSel = false;
          gsap.to(mobileSideMenu, { right: 0, duration: 0.7 });
        } else {
          isSel = true;
          gsap.to(mobileSideMenu, { right: -480, duration: 0.7 });
        }
      }
  
}





//
//메인배너 이미지 애니메이션
gsap.to("#mainBanner", {
  duration: 1.5,
  ease: "power4.inOut",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});
//
//시작 메인 타이포그래피 애니메이션

const duration = 0.8;
const numberOfTargets = gsap.utils.toArray('.utill > div').length
const pause = 1.5;
const stagger = duration + pause;
const delay = stagger * (numberOfTargets - 1) + pause;
const tl = gsap.timeline();

gsap.set('.utill > div',{transformOrigin:'100% 50% -50'})

tl.from('.utill > div',{
  rotationX:90,
  opacity:0,
  duration:duration,
  stagger:{
    each:stagger,
    repeatDelay:delay
  }
})
//
//
//메인 배너 꽃잎 장식 애니메이션
gsap.to('#flower01', {
        y: 84,
        duration: 1.5,
        rotation: 0,
      });

gsap.to('#flower04', {
        y: 0,
        duration: 1.9,
        rotation: 0,
        opacity:1
      });
      
      
gsap.to('#flower06', {
        x: 0.01,
        duration: 1,
        opacity:1
      });
//
//
//

