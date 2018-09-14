const selected = (state = [] , action) => {

    const newSelected = state.slice(); // haces el slice aqui arriba para luego hacer el splice abajo...
    switch (action.type){
        case 'ADD_COMIC':

            return  state.concat(action.comicId);

        case 'DELETE_COMIC':

            newSelected.splice(newSelected.indexOf(action.comicId), 1);
            return newSelected;
        default:
            return state;
    }
}

export default selected;