var h1 = document.createElement('h1');
var root = document.getElementById('root');
h1.innerText = 'Hello Guys';
h1.id = 'dohung';
h1.className = 'viethung';
Object.assign(h1.style, {
    color: "blue",
    backgroundColor: '#ccc'
});
console.log(h1);
console.log(root);
root === null || root === void 0 ? void 0 : root.appendChild(h1);
