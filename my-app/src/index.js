import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './index.css';
import cartplussolid from './myImgs/cartplussolid.svg';
//add button img source button img source: https://fontawesome.com/icons/cart-plus?style=solid

const ingredients = ["onion", "milk", "eggs", "apple", "jalapeno"];

class IngredientList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            numChildren: 1
        }
    }
    render() {
        const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent key={i} number={i} />);
        };

        return (
            <div>
            <div className="shoppingList">
                <h1>My Ingredients</h1>
               
                <div>
                    <ParentComponent addChild={this.onAddChild}>
                        {children}
                    </ParentComponent>
                </div>
                </div>
                <div className="recipeList">
                    <h1>My Recipes</h1>
                </div>

                </div>
            
           

        );
    }
    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
}


const ParentComponent = props => (
    <div id="addButton">
        <div><img id='addButton' src={cartplussolid} onClick={props.addChild} /></div>
        <div id="children-pane">
            {props.children}
        </div>
    </div>
);

const ChildComponent = props =>
    <div id="textfieldz">{
    <Autocomplete
    options={ingredients}
    //getOptionLabel={(option) => option.title}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Add an Ingredient" variant="outlined" />}
    />
    }</div>;


const setButtonHeight = props => {
    var elmnt = document.getElementById("textfieldz");
    console.log("here");
    // var txt = "Height including padding and border: " + elmnt.offsetHeight + "px<br>";
    // document.getElementById("addButton").height = elmnt.offsetHeigh * (numChildren-1) + 'px';
}

// ========================================

ReactDOM.render(<IngredientList />, document.getElementById("root"));
/*function setButtonHeight() {
    var elmnt = document.getElementById("textfieldz");
    console.log("here");
    // var txt = "Height including padding and border: " + elmnt.offsetHeight + "px<br>";
    // document.getElementById("addButton").height = elmnt.offsetHeigh * (numChildren-1) + 'px';
}*/



