
const h1 = document.createElement('h1');
const root= document.getElementById('root') as HTMLElement | null;
h1.innerText = 'Hello Guys' as string;
h1.id = 'dohung' as string;
h1.className = 'viethung' as string;

Object.assign(h1.style,{
    color:"blue",
    backgroundColor:'#ccc'
})
console.log(h1);
console.log(root)

root?.appendChild(h1);

