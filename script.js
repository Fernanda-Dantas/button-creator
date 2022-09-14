const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange)


const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    texto(value) {
        this.element.innerText = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    },
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    saveValues(name, value);
    showCss();
}


function saveValues(name, value) {
    localStorage[name] = value;
}

function setValues() {
    const savedProperties = Object.keys(localStorage);
    savedProperties.forEach(property => {
        handleStyle[property](localStorage[property]);
        controles.elements[property].value = localStorage[property];
    });
    showCss();

}

setValues();

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}