// our code
console.log("Hello, World!");

// more code
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

const arrayOfObjects = [
    { id: 1, value: "First" },
    { id: 2, value: "Second" },
    { id: 3, value: "Third" }
];


renderToHtml(arrayOfObjects);

const renderToHtml = (items) => {
    const container = document.getElementById("container");
    items.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.id}: ${item.value}`;
        container.appendChild(div);
    });
}