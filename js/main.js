console.log('hello');
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search input');

console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
    
});

searchInputEl.addEventListener('focus',function(){
    searchInputEl.setAttribute('placeholder','통합검색');
    searchEl.classList.add('focused');
});
searchInputEl.addEventListener('blur',function(){
    searchInputEl.setAttribute('placeholder','');
    searchEl.classList.remove('focused');
});

// 순서대로 요소 나타내기
// 나타날 요소(.fade-in)찾기
const fadeEls = document.querySelectorAll('.banner .fade-in'); //배열
// console.log(fadeEls);
fadeEls.forEach(function(fadeEl,index){
    // console.log(fadeEl);
    // console.log(index);
    gsap.to(fadeEl,1,{
        delay:(index+1)* 0.5,
        opacity:1
    })
});



new Swiper('.notice_line', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay:true
});


const promoSwiper = new Swiper('.promotion .swiper-container',{
    loop : true,
    slidesPerView:3, // 한번에 보여질 슬라이드 개수
    spaceBetween:10, // 슬라이드 사이 여백
    centeredSlides:true, // 보여질 슬라이드가 가운데 
    autoplay:{
        delay:5000 //5초
    },
    pagination:{
        el:'.promotion .swiper-pagination',
        clickable:true
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

const swiperControlBtn = document.querySelector('.swiper-control-btn');
swiperControlBtn.addEventListener('click',function(){
    //스와이퍼 상태 확인
    let isSwiperOn = swiperControlBtn.classList.contains('on');
    if(isSwiperOn){
        //stop
        swiperControlBtn.classList.remove('on');
        promoSwiper.autoplay.stop();
        swiperControlBtn.textContent='pause';
    }else{
        //start
        swiperControlBtn.classList.add('on');
        promoSwiper.autoplay.start();
        swiperControlBtn.textContent='play_arrow';
    }
});

// 프로모션 영역요소
const promotionEl = document.querySelector('.promotion');
// 프로모션 영역 토글 버튼요소
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 프로모션 영역 숨김여부 기본값
let isHidePromotion = false;
//토글버튼을 클릭하면
promotionToggleBtn.addEventListener('click',function(){
    // 프로모션 영역 숨김여부 'hide'확인
    isHidePromotion = promotionEl.classList.contains('hide');
    if(!isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});

//감지할 요소들 검색
const spyEls = document.querySelectorAll('#body_layout .scroll-spy');
// console.log(spyEls);
// 각 요소들에 기능 처리
spyEls.forEach(function(spyEl){
    // console.log(spyEl);
    new ScrollMagic.Scene({ //Scene 감지할 요소 추가
         triggerElement: spyEl //보여짐 여부를 감지할 요소
        ,triggerHook : 0.8 //화면 80% 지점에서 보여짐 여부 감지
    })
    .setClassToggle(spyEl,'show') //요소가 화면에 감지되면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); //코드 내부에 기능 할당(필수!)
});


new Swiper('.awards .swiper-container',{
    slidesPerView :5,
    loop:true,
    spaceBetween:30,
    autoplay:{
        delay:3000
    },
    navigation : {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});

const badgeEl = document.querySelector('#head_layout .badges');
// console.log(badgeEl);


window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        gsap.to(badgeEl,.6,{
            opacity:0,
            display:'none'
        });
        //상단버튼 보이기
        gsap.to('#to-top',0.3,{
            x:0
        });
    }else{
        //배지 보이기
        gsap.to(badgeEl,.6,{
            opacity:1,
            display:'block'
        });
        //상단버튼 숨기기
        gsap.to('#to-top',0.3,{
            x:100
        });
    }
},300));

// 상단으로 이동
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    })
});

