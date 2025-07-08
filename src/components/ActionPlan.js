import React, { useState } from 'react';

function ActionPlan() {
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    { id: 1, title: "Assess Your Current Financial Situation", description: "List all income, expenses, debts, and assets" },
    { id: 2, title: "Create an Emergency Budget", description: "Focus on essential expenses only" },
    { id: 3, title: "Contact Creditors", description: "Explain your situation and negotiate payment plans" },
    { id: 4, title: "Apply for Assistance Programs", description: "Research and apply for government and nonprofit aid" },
    { id: 5, title: "Increase Income", description: "Look for additional work, sell unused items, or monetize skills" },
    { id: 6, title: "Build an Emergency Fund", description: "Save even small amounts regularly" }
  ];

  const toggleStep = (stepId) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <div className="card card-custom" data-name="action-plan" data-file="src/components/ActionPlan.js">
      <div className="card-body">
        <h3 className="card-title d-flex align-items-center mb-4">
          <i className="bi bi-list-check fs-3 me-3 text-primary"></i>
          Your Recovery Action Plan
        </h3>
        
        <div className="d-grid gap-3">
          {steps.map((step) => {
            const isCompleted = completedSteps.includes(step.id);
            return (
              <div
                key={step.id}
                className={`p-3 rounded border-2 cursor-pointer ${
                  isCompleted 
                    ? 'border-success bg-success bg-opacity-10' 
                    : 'border-secondary bg-white'
                }`}
                onClick={() => toggleStep(step.id)}
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              >
                <div className="d-flex align-items-start">
                  <i className={`bi ${isCompleted ? 'bi-check-circle-fill text-success' : 'bi-circle text-muted'} fs-5 me-3 mt-1`}></i>
                  <div className="flex-grow-1">
                    <h5 className={`mb-1 ${isCompleted ? 'text-success' : 'text-dark'}`}>
                      Step {step.id}: {step.title}
                    </h5>
                    <p className={`mb-0 small ${isCompleted ? 'text-success' : 'text-muted'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 p-3 bg-primary bg-opacity-10 rounded">
          <div className="d-flex align-items-center">
            <i className="bi bi-bullseye fs-4 text-primary me-3"></i>
            <div>
              <p className="mb-1 fw-semibold text-primary">Progress: {completedSteps.length}/{steps.length} steps completed</p>
              <p className="mb-0 small text-primary">Every step forward is progress toward financial stability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionPlan;
