import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './index.css';
import cartplussolid from './myImgs/cartplussolid.svg';
import logo from './myImgs/logo.PNG';
import search from './myImgs/searchsolid.svg';
import trash from './myImgs/trash.svg';
import heartSolid from './myImgs/heart-solid.svg';
import heartOutline from './myImgs/heart-regular.svg';
import printIcon from './myImgs/print.svg';


const id = 'a85e8f22';
const accessKey = '28c66150a96c07535c6b30fe06a9d079';
//add button img source: https://fontawesome.com/icons/cart-plus?style=solid
// search img source: https://fontawesome.com/icons/search?style=solid
// trash img source: https://fontawesome.com/icons/trash-alt?style=solid
//print img source: https://fontawesome.com/icons/print?style=solid
//solid heart img source:https://fontawesome.com/icons/heart?style=solid
//reg heart img source: https://fontawesome.com/icons/heart?style=regular
const ingredients = ["onion", "milk", "eggs", "apple", "jalapeno"];
const quantNums = ["1/4", "1/3", "1/2", "3/4","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
const quantLabel = ["cups", "oz", "amount", "teaspoon", "tablespoon"];

const url = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken?q=bread&app_id=c1c9c231&app_key=3f40d79b25897e034e24516add90ae3b"
const urlFood = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=a85e8f22&app_key=28c66150a96c07535c6b30fe06a9d079"




class IngredientList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            numChildren: 1
        }
    }

    search() {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })

            .then(response => response.json())
            .then(data => this.populate(data));
    }
    populate(data) {
        console.log(data)
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
                    <div id="menu">
                        <a href="index.js">Home</a>
                        <a href="index.js">Recipe Finder</a>
                        <a href="index.js">My Recipes</a>
                        <a href="index.js">Account</a>
                </div>
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
                        <h1>Recipes</h1>
                        <div><img id='printIcon' title="Print Recipe" src={printIcon} /></div>
                        <div><img id='heartOutline' title="Save to My Recipes" src={heartOutline} /></div>
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




