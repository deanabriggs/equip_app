// public/main.js

const edit = document.querySelector(".edit-button")

// UPDATE
products.findOneAndUpdate(
    { product: "prod8"}, 
    {   
        $set: {
            product: req.body.name,
            description: req.body.description,
            manufacturer: req.body.manufacturer,
            part_num: req.body.part_num,
            cost: req.body.cost,
            retail: req.body.retail
        }
    }, 
    {
        upsert: true,
    }
    )
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error));

edit.addEventListener('click', _=> {
    fetch('/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: "Turret Camera",
            retail: "120",
        })
    })
})