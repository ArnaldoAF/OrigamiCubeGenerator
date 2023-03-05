/**
 * Fill a select input with a list of option
 *
 * @param {string} selectComponentId Id of the select input
 * @param {array<string>} optionList list of options
 */
export default function fillSelectOption(selectComponentId, optionList) {
    let select = document.querySelector(selectComponentId);
    select.innerHTML = "";
    optionList.forEach((item) => {
        let option = document.createElement("option");
        option.value = item.code;
        option.innerHTML = item.name;
        select.appendChild(option);
    });
}