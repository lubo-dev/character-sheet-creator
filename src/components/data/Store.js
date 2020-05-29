import PageData from '../page/PageData';

class Store {
    state = {
        pages: [],
    };

    addPage() {
        this.state.pages.push(new PageData(this.state.pages.length));
    }

    save() {
        localStorage.pages = JSON.stringify(this.state.pages);
    }
}

let store = new Store();

if (localStorage.pages && localStorage.pages.length !== 0) {
    store.state.pages = JSON.parse(localStorage.pages);
} else {
    store.state.pages = [new PageData(0)];
}

export default store;
