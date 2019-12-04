const createBtn = document.querySelector('.create');
const deleteBtn = document.querySelector('.delete');
const viewArea = document.querySelector('.view');
const formBox = document.formBox;

createBtn.addEventListener('click', createAct)
deleteBtn.addEventListener('click', deleteAct)

function createAct(e){
    e.preventDefault();

    let template = `
        <div class="box" style="background-color:${formBox.spaceColor.value}">
            <div class="resizeBox">
                <h2>${formBox.spaceName.value}</h2>
                <span>${formBox.spaceArea.value}<i>m<sup>2</sup></i></span>
            </div>
        </div>
    `

    viewArea.insertAdjacentHTML('beforeend', template);

    let resetArray = [spaceName, spaceArea]
    resetValue(resetArray)

    spaceName.focus();
}

function resetValue(ele){
    ele.forEach(e => {
        e.value = '';
    })
}

function deleteAct(){
    viewArea.innerHTML = '';
}

let viewBox = null;
let standX = 0, standY = 0, changeX, changeY;

viewArea.addEventListener('mousedown', function(e){
    viewBox = e.target;
    standX = e.clientX;
    standY = e.clientY;
    if(viewBox !== viewArea){   
        document.onmouseup = endDrag;
        document.onmousemove = moveDrag;
    }
})

function moveDrag(e){
    changeX = standX - e.clientX;
    changeY = standY - e.clientY;
    standX = e.clientX;
    standY = e.clientY;
    viewBox.style.left = viewBox.offsetLeft - changeX + 'px';
    viewBox.style.top = viewBox.offsetTop - changeY + 'px';
}

function endDrag(e){
    document.onmouseup = null;
    document.onmousemove = null;
}
