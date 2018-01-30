$('#click-me').click(() => {
    addItem();
});
$('#show-array').click(() => {
    console.log(itemArray);
})
let count = 0;
let itemArray = [];

function addItem() {
    itemArray.push({
        name: '',
        hour: 0,
        minutes: 0
    });
    const item = `
    <div>
        <input type="text" id="inputName-${count}" 
            onkeyup="editValue(event)"
            placeholder="Name"
        />
        <input type="number" id="inputHr-${count}" 
            placeholder="Hour"
            onkeyup="editValue(event)"
        />
        <input type="number" id="inputSeconds-${count}" 
            placeholder="Minutes"
            disabled
        />
    </div>`;
    $("body").append(item);
    count++;
}
function editValue(e) {
    const id = e.target.id;
    const value = e.target.value;
    const index = id.split('-')[1];
    const inputType = id.split('-')[0];
    switch (inputType) {
        case "inputName":
            itemArray[index].name = value;
            break;
        case "inputHr":
            itemArray[index].hour = value;
            itemArray[index].minutes = value * 60;
            $(`#inputSeconds-${index}`).val(value * 60);
            break;
        default:
            break;
    }
}
function addItemToArray(item) {
    itemArray.push(item);
}