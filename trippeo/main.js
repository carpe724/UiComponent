window.addEventListener('scroll', scrollFnc)

let sectionStep = 0;
let standOffset = 0;
let scrollFlag = true;
let scrollTobe = 0;
let scrollNow = 0;

function scrollFnc() {
    
    let scrollTop = window.pageYOffset;
    if(scrollFlag){
        if(scrollTop > standOffset){
            sectionStep++;
        }else{
            sectionStep--;
        }
        scrollFlag = false;
        scrollTobe = sectionStep * window.innerHeight;
        // scrollAnimation();
        console.log('go')
    }
    standOffset = scrollTop;
}


function scrollAnimation(){
    scrollNow = window.pageYOffset;
    console.log('scrollTobe : ' + scrollTobe, 'scrollNow : ' + scrollNow)
    if(scrollNow != scrollTobe){
        scrollNow = scrollNow + 1;
        window.scrollTo(0, scrollNow)
        setTimeout(scrollAnimation)
    }else{
        console.log('stop')
        clearTimeout(scrollAnimation);
        scrollFlag = true;
        return;
    }
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function test(){
    var depth = 5;
    for(var i = 0; i < depth; i++){
        var result = ' '.repeat(depth);
        result = result.replaceAt(2, '#');
        console.log(result)
    }
}

test();