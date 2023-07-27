import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    getIncomeInDollars : (income) => {return `$${income}`;},
    getIncomeInEuros : (income) => {return `${income} Euros`;},
    ...budget
  };

  return fullBudget;
}



