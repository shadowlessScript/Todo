
export default function createComponent(element, eleClassName, text) {
    const ele = document.createElement(`${element}`);
    ele.classList.add(`${eleClassName}`)
    if (text)
    {
        ele.textContent = `${text}` 

    }

    return ele
}