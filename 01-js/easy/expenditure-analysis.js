/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
// returns a List
// collect all the transaction of specific category and add all there prices

function calculateTotalSpentByCategory(transactions) {
  //intializing  empty array
  const categoryTotal = {};
  // checking for existing category or new category
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    if (categoryTotal.hasOwnProperty(category)) {
      categoryTotal[category] += price; // increasing the price of the category
    } else {
      categoryTotal[category] = price;// making a new category
    }
  });
  console.log("categoryTotal")
  return Object.entries(categoryTotal).map(([category, totalSpent]) => ({ category, totalSpent }));

}

module.exports = calculateTotalSpentByCategory;
