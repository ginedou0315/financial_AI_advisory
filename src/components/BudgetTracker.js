import React, { useState, useEffect } from 'react';

function BudgetTracker({ onDataChange }) {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

  const addExpense = () => {
    if (newExpense.name && newExpense.amount) {
      const updatedExpenses = [...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }];
      setExpenses(updatedExpenses);
      setNewExpense({ name: '', amount: '' });
      if (onDataChange) {
        onDataChange(income, updatedExpenses);
      }
    }
  };

  useEffect(() => {
    if (onDataChange) {
      onDataChange(income, expenses);
    }
  }, [income, expenses]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = parseFloat(income) - totalExpenses;

  return (
    <div className="card card-custom" data-name="budget-tracker" data-file="src/components/BudgetTracker.js">
      <div className="card-body">
        <h3 className="card-title d-flex align-items-center mb-4">
          <i className="bi bi-calculator fs-3 me-3 text-success"></i>
          Simple Budget Tracker
        </h3>
        
        <div className="mb-4">
          <label className="form-label fw-semibold">Monthly Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="form-control"
            placeholder="Enter your monthly income"
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Add Expense</label>
          <div className="row g-2">
            <div className="col">
              <input
                type="text"
                value={newExpense.name}
                onChange={(e) => setNewExpense({...newExpense, name: e.target.value})}
                className="form-control"
                placeholder="Expense name"
              />
            </div>
            <div className="col-auto">
              <input
                type="number"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                className="form-control"
                placeholder="Amount"
                style={{width: '100px'}}
              />
            </div>
            <div className="col-auto">
              <button onClick={addExpense} className="btn btn-primary btn-custom">
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {expenses.length > 0 && (
          <div className="mb-4">
            <h5 className="fw-semibold mb-3">Expenses</h5>
            <div className="list-group">
              {expenses.map((expense, index) => (
                <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{expense.name}</span>
                  <span className="fw-bold">${expense.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {income && (
          <div className="bg-light p-3 rounded">
            <div className="d-flex justify-content-between mb-2">
              <span>Total Income:</span>
              <span className="fw-bold text-success">${parseFloat(income).toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Total Expenses:</span>
              <span className="fw-bold text-danger">${totalExpenses.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Remaining:</span>
              <span className={`fw-bold ${remaining >= 0 ? 'text-success' : 'text-danger'}`}>
                ${remaining.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BudgetTracker;
