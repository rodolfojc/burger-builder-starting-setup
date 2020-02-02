import React from 'react';

import classes from './BurgerIngredient.css';

const burgerIngredients = ( props ) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-button'):
            ingredient = <div className={classes.BreadButtom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seed1}></div>
                    <div className={classes.Seed2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredients;