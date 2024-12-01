let btnOrder = document.getElementById("myBtn");
let ddlOrder = document.getElementById("SelectOrder");

ddlOrder.addEventListener('change', (e) => {
    console.log(ddlOrder.value);

    let existingDiv = document.querySelector('.Polje#merchDiv');
    if (existingDiv) {
        existingDiv.remove();
    }

    if (ddlOrder.value === "merch") {
        let ddlMerch = document.createElement('select');
        ddlMerch.setAttribute('id', "ddlMerch");

        let options = ["T-Shirt", "Cap", "Magnet", "Sticker", "Badge", "Brooch"];
        options.forEach(optionText => {
            let option = document.createElement('option');
            option.value = optionText.toLowerCase();
            option.text = optionText;
            ddlMerch.appendChild(option);
        });

        let div = document.createElement('div');
        div.classList.add('Polje');
        div.setAttribute('id', 'merchDiv');

        let label = document.createElement('label');
        label.setAttribute('for', "ddlMerch");
        label.textContent = "Select merch item";
        label.classList.add("size20");

        div.appendChild(label);
        div.appendChild(ddlMerch);

        ddlOrder.parentElement.parentElement.insertBefore(div, ddlOrder.parentElement.nextSibling);
    }
});
