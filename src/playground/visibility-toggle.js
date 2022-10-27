let visibility = false;
const renderapp = () => {
    const template = (
        <div>
            <h1>
                Aqui esta una Headinga!
            </h1>
            <button>
                {visibility? 'Show Line': 'Hide line'}
            </button>
        </div>
    );
    ReactDOM.render(template, document.getElementById('appjs'));
};
renderapp();