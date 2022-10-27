console.log("App.js Is Running!");

const app = {
    title: 'Indecision app',
    subtitle: 'A React project',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.options.value;
    if (option) {
        app.options.push(option);
        //e.target.elemets.options.value='';
        e.target.elements.options.value = '';
        renderapp();

    }
};

const removeAll = () => {
    app.options = [];
    renderapp();
};
const helpinghand = () => {
    let rand = Math.floor(Math.random() * app.options.length);
    //console.log(rand);
    const opt = app.options[rand];
    alert(opt);
};

let approot = document.getElementById('appjs');
const renderapp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <button onClick={helpinghand}>Need help!</button><br></br>
            {app.options.length > 0 ? 'Here are your Options' : 'No options'}
            <p>You have entered {app.options.length} options.</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((items) => {
                        return <li key={items}>Item: {items}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="options" />
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, approot);
};
renderapp();
