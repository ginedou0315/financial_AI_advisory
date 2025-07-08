import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import BudgetTracker from './components/BudgetTracker';
import ActionPlan from './components/ActionPlan';
import EmergencyResources from './components/EmergencyResources';
import AIFinancialAdvisor from './components/AIFinancialAdvisor';
import ResourceCard from './components/ResourceCard';
import { financialResources } from './utils/financialData';

function App() {
  const [budgetData, setBudgetData] = useState({ income: '', expenses: [] });

  const handleBudgetChange = useCallback((income, expenses) => {
    setBudgetData({ income, expenses });
  }, []);

  return (
    <div className="bg-light min-vh-100" data-name="app" data-file="src/App.js">
      <Header />
      
      <main className="container py-4">
        <div className="row mb-4">
          <div className="col-lg-6 mb-4">
            <BudgetTracker onDataChange={handleBudgetChange} />
          </div>
          <div className="col-lg-6 mb-4">
            <ActionPlan />
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-12">
            <AIFinancialAdvisor income={budgetData.income} expenses={budgetData.expenses} />
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-12">
            <EmergencyResources />
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center fw-bold text-dark mb-4">
              Resources to Help You Recover
            </h2>
            <div className="row">
              {financialResources.map((resource, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <ResourceCard
                    title={resource.title}
                    description={resource.description}
                    icon={resource.icon}
                    resources={resource.resources}
                    bgColor={resource.bgColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="card card-custom text-center gradient-card">
              <div className="card-body">
                <h3 className="card-title text-dark mb-3">
                  Remember: You're Not Alone
                </h3>
                <p className="text-muted mb-4">
                  Financial difficulties are temporary. With the right resources, planning, and support, 
                  you can overcome these challenges and build a more secure financial future.
                </p>
                <div className="d-flex justify-content-center align-items-center text-primary">
                  <i className="bi bi-heart-fill fs-4 me-2"></i>
                  <span className="fw-semibold">Take it one step at a time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
