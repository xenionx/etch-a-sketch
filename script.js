const canvas = document.querySelector('.canvas');
const buttons = document.querySelectorAll('button');

window.addEventListener('load', (() =>{
    for(i = 0; i < 256; i++){
        const grid = document.createElement('div');
        grid.style.cssText = 'width: 40px; height: 35px;  flex: 1 1 auto;'
        grid.addEventListener('mouseover', () =>{
                grid.style.backgroundColor = "black";
        })
        canvas.appendChild(grid);
    }})
) 


buttons.forEach((button) => {
    let colorChoice = "";
    button.addEventListener('click', (()=>{
        clearCanvas();
        if(button.getAttribute('class') == "16x16"){
            for(i = 0; i < 256; i++){
                const grid = document.createElement('div');
                grid.style.cssText = 'width: 40px; height: 35px; flex: 1 1 auto;'   
                grid.addEventListener('mouseover', () =>{
                        grid.style.backgroundColor = "black";
                })
                canvas.appendChild(grid);
            }
        }else if(button.getAttribute('class') == "32x32"){
            for(i = 0; i < 1024; i++){
                const grid = document.createElement('div');
                grid.style.cssText = 'width: 20px; height: 17.5px; flex: 1 1 auto;'
                grid.addEventListener('mouseover', () =>{
                        grid.style.backgroundColor = "black";
                })
                canvas.appendChild(grid);
            }
        }else if(button.getAttribute('class') == "64x64"){
            for(i = 0; i < 4096; i++){
                const grid = document.createElement('div');
                grid.style.cssText = 'width: 10px; height: 8.75px; flex: 1 1 auto'
                grid.addEventListener('mouseover', () =>{
                        grid.style.backgroundColor = "black";
                })
                canvas.appendChild(grid);
            }
        }
    }))
})



function clearCanvas(){
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}


