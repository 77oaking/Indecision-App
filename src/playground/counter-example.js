
let count = 0;
const addone = () => {
    count++;
    rendercounterapp();
};
const subtractone = () => {
    count--;
    rendercounterapp();
};
const reset = () => {
    count = 0;
    rendercounterapp();
};

let approot = document.getElementById('appjs');
const rendercounterapp = () => {
    const templatetwo = (
        <div>
            <h1>
                Count: {count}
            </h1><br></br>
            <button onClick={addone}>
                +1
            </button><br></br>
            <button onClick={subtractone}>
                -1
            </button><br></br>
            <button onClick={reset}>
                reset
            </button>
        </div>
    );
    ReactDOM.render(templatetwo, approot);
};
rendercounterapp();