import React, { useState } from "react";
import { Plus, DollarSign, TrendingUp, PieChart, Trash2 } from "lucide-react";

const Budget = () => {
    const [totalBudget, setTotalBudget] = useState(3500);
    const [expenses, setExpenses] = useState([
        { id: 1, category: 'Flights', amount: 850, date: '2024-01-05', description: 'Round trip to Paris' },
        { id: 2, category: 'Accommodation', amount: 1200, date: '2024-01-05', description: 'Hotel de Crillon - 5 nights' },
        { id: 3, category: 'Food', amount: 150, date: '2024-01-10', description: 'Restaurant reservations' },
        { id: 4, category: 'Transportation', amount: 80, date: '2024-01-12', description: 'Airport transfers' },
        { id: 5, category: 'Activities', amount: 120, date: '2024-01-15', description: 'Museum tickets' },
        { id: 6, category: 'Shopping', amount: 50, date: '2024-01-18', description: 'Souvenirs budget' }
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newExpense, setNewExpense] = useState({
        category: 'Food',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        description: ''
    });

    const categories = {
        'Flights': { icon: '✈️', color: 'bg-blue-100 text-blue-700' },
        'Accommodation': { icon: '🏨', color: 'bg-purple-100 text-purple-700' },
        'Food': { icon: '🍽️', color: 'bg-red-100 text-red-700' },
        'Transportation': { icon: '🚗', color: 'bg-green-100 text-green-700' },
        'Activities': { icon: '🎯', color: 'bg-orange-100 text-orange-700' },
        'Shopping': { icon: '🛍️', color: 'bg-pink-100 text-pink-700' },
        'Other': { icon: '📦', color: 'bg-gray-100 text-gray-700' }
    };

    const addExpense = (e) => {
      e.preventDefault();
      const expense = {
        ...newExpense,
        id: Date.now(),
        amount: parseFloat(newExpense.amount)
      };
      setExpenses([...expenses, expense].sort((a, b) => new Date(b.date) - new Date(a.date)));
      setNewExpense({
        category: 'Food',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        description: ''
      });
      setShowAddForm(false);
    };

    const deleteExpense = (id) => {
      setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const remaining = totalBudget - totalSpent;
    const spentPercentage = (totalSpent / totalBudget) * 100;

    const getCategoryTotals = () => {
      const totals = {};
      expenses.forEach(expense => {
        totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
      });
      return Object.entries(totals).map(([category, amount]) => ({
        category,
        amount,
        percentage: (amount / totalSpent) * 100
      })).sort((a, b) => b.amount - a.amount);
    };

    const categoryTotals = getCategoryTotals();

    return (
        <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Travel Budget</h2>
        <p className="text-gray-600">Track your travel expenses and stay within budget</p>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Budget</h3>
            <div className="bg-ocean-100 p-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-ocean-600" />
            </div>
          </div>
          <div className="space-y-2">
            <input
              type="number"
              value={totalBudget}
              onChange={(e) => setTotalBudget(parseFloat(e.target.value) || 0)}
              className="text-2xl font-bold text-gray-900 bg-transparent border-none p-0 w-full focus:outline-none"
            />
            <p className="text-sm text-gray-500">Adjustable budget limit</p>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Spent</h3>
            <div className="bg-red-100 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-red-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">${totalSpent.toFixed(2)}</p>
          <p className="text-sm text-gray-500">{spentPercentage.toFixed(1)}% of budget</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Remaining</h3>
            <div className={`p-2 rounded-lg ${remaining >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
              <DollarSign className={`h-5 w-5 ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>
          <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${Math.abs(remaining).toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">
            {remaining >= 0 ? 'Under budget' : 'Over budget'}
          </p>
        </div>
      </div>

      {/* Budget Progress Bar */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Budget Progress</h3>
          <span className="text-lg font-bold">{spentPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className={`h-4 rounded-full transition-all duration-500 ${
              spentPercentage > 100 ? 'bg-red-500' :
              spentPercentage > 80 ? 'bg-yellow-500' :
              'bg-green-500'
            }`}
            style={{ width: `${Math.min(spentPercentage, 100)}%` }}
          ></div>
        </div>
        {spentPercentage > 100 && (
          <p className="text-sm text-red-600 mt-2">
            You've exceeded your budget by ${(totalSpent - totalBudget).toFixed(2)}
          </p>
        )}
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
          <div className="space-y-4">
            {categoryTotals.map(item => (
              <div key={item.category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-lg text-sm ${categories[item.category].color}`}>
                    {categories[item.category].icon}
                  </span>
                  <span className="font-medium">{item.category}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${item.amount.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">{item.percentage.toFixed(1)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Expense Form */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Add Expense</h3>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
          
          {showAddForm && (
            <form onSubmit={addExpense} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                  className="input-field"
                >
                  {Object.keys(categories).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={newExpense.date}
                  onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  value={newExpense.description}
                  onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                  className="input-field"
                  placeholder="What was this expense for?"
                />
              </div>
              
              <div className="flex space-x-4">
                <button type="submit" className="btn-primary flex-1">
                  Add Expense
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Recent Expenses */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Expenses</h3>
        <div className="space-y-3">
          {expenses.length === 0 ? (
            <div className="text-center py-8">
              <PieChart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No expenses recorded yet</p>
            </div>
          ) : (
            expenses.map(expense => (
              <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-lg text-sm ${categories[expense.category].color}`}>
                    {categories[expense.category].icon}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{expense.description || expense.category}</p>
                    <p className="text-sm text-gray-500">{new Date(expense.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-gray-900">${expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    );
};

export default Budget;