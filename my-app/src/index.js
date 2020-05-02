import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './index.css';
import cartplussolid from './myImgs/cartplussolid.svg';
import logo from './myImgs/logo.PNG';
import search from './myImgs/searchsolid.svg';
import trash from './myImgs/trash.svg';

//add button img source: https://fontawesome.com/icons/cart-plus?style=solid
// search img source: https://fontawesome.com/icons/search?style=solid
// trash img source: https://fontawesome.com/icons/trash-alt?style=solid

const ingredients = ["onion", "milk", "eggs", "apple", "jalapeno"];
const quantNums = ["1/4", "1/3", "1/2", "3/4","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
const quantLabel = ["cups", "oz", "Amount", "teaspoon", "tablespoon"];

class IngredientList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            numChildren: 1
        }
    }

    search() {
        document.getElementById("recipeBox").innerHTML = "<h3>No Recipes Were Found</h3>";
    }
    render() {
        const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent key={i} number={i} />);
        };

        return (
            <div>
                <div className='mainheader'>
                    <img id='logo' src={logo} />
                </div>
                <div className="shoppingList">
                    <div className='miniHeader'>
                        <h1>My Ingredients</h1>
                    </div>
                    
                    <div>
                        <div><img id='search' title="Search for Recipes" src={search} onClick={() => this.search()} /></div>
                        <div><img id='trash' title="Clear List" src={trash} onClick={() => this.setState({ numChildren: 1 })} /></div>
                    <ParentComponent addChild={this.onAddChild}>
                        {children}
                    </ParentComponent>
                </div>
                </div>
                <div className="recipeList">
                    <div className='miniHeader'>
                        <h1>My Recipes</h1>
                    </div>
                    <div id='recipeBox'>
                    </div>
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
        <div><img id='addButton' title="Add an Ingredient" src={cartplussolid} onClick={props.addChild} /></div>
        <div id="children-pane">
            {props.children}
        </div>
    </div>
);

const ChildComponent = props =>
    <div>{
        <div>
    <div id="textfieldz">
        <Autocomplete
            options={ingredients}
            //getOptionLabel={(option) => option.title}
            style={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Ingredient" variant="outlined"  />}
            />
        </div>
        <div id="quant">
            <Autocomplete
                    options={quantNums}
                //getOptionLabel={(option) => option.title}
                style={{ width: 110 }}
                renderInput={(params) => <TextField {...params} label="Quantity" variant="outlined" />}
            />
            </div>
            <div id="quantLabel">
                <Autocomplete
                    options={quantLabel}
                    //getOptionLabel={(option) => option.title}
                    style={{ width: 190 }}
                    renderInput={(params) => <TextField {...params} label="Label" variant="outlined" />}
                />
            </div>
            </div>
    }</div>;


// ========================================

ReactDOM.render(<IngredientList />, document.getElementById("root"));
/*function setButtonHeight() {
    var elmnt = document.getElementById("textfieldz");
    console.log("here");
    // var txt = "Height including padding and border: " + elmnt.offsetHeight + "px<br>";
    // document.getElementById("addButton").height = elmnt.offsetHeigh * (numChildren-1) + 'px';
}*/



