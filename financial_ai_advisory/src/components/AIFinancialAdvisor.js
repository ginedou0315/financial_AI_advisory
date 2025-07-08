import React, { useState } from 'react';

// Mock function for AI agent - replace with actual implementation
const mockAnalyzeFinances = async (income, expenses) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      const remaining = parseFloat(income) - totalExpenses;
      
      resolve(`Based on your financial data, here are my recommendations:

1. **Budget Analysis**: Your current spending pattern shows areas for improvement.

2. **Priority Actions**:
   - Focus on essential expenses first
   - Look for ways to reduce discretionary spending
   - Consider additional income sources

3. **Next Steps**:
   - Track your expenses daily
   - Set up automatic savings
   - Review your budget weekly

Remember, small steps lead to big changes. You're taking the right approach by tracking your finances!`);
    }, 2000);
  });
};

function AIFinancialAdvisor({ income, expenses }) {
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const analyzeFinances = async () => {
    if (!income || expenses.length === 0) {
      alert('Please enter your income and add some expenses first');
      return;
    }

    setIsAnalyzing(true);
    setHasAnalyzed(false);

    try {
      const response = await mockAnalyzeFinances(income, expenses);
      setAnalysis(response);
      setHasAnalyzed(true);
    } catch (error) {
      setAnalysis('Sorry, I encountered an error while analyzing your finances. Please try again later.');
    }
    
    setIsAnalyzing(false);
  };

  return (
    <div className="card card-custom gradient-card border-success" data-name="ai-financial-advisor" data-file="src/components/AIFinancialAdvisor.js">
      <div className="card-body">
        <h3 className="card-title d-flex align-items-center mb-4 text-success">
          <i className="bi bi-cpu fs-3 me-3"></i>
          AI Financial Advisor
        </h3>
        
        <div className="mb-4">
          <p className="text-muted mb-4">
            Get personalized recommendations based on your income and expenses. 
            Our AI will analyze your financial situation and suggest ways to improve your spending habits.
          </p>
          
          <button
            onClick={analyzeFinances}
            disabled={isAnalyzing}
            className={`btn btn-primary btn-custom w-100 btn-icon ${isAnalyzing ? 'disabled' : ''}`}
          >
            {isAnalyzing ? (
              <>
                <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                Analyzing your finances...
              </>
            ) : (
              <>
                <i className="bi bi-lightning-charge"></i>
                Get AI Financial Analysis
              </>
            )}
          </button>
        </div>

        {hasAnalyzed && analysis && (
          <div className="mt-4 p-3 bg-white rounded border border-success">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-lightbulb text-warning fs-5 me-2"></i>
              <h5 className="mb-0 text-success">Your Personalized Financial Analysis</h5>
            </div>
            <div className="text-dark" style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {analysis}
            </div>
          </div>
        )}
        
        {!hasAnalyzed && !isAnalyzing && (
          <div className="mt-4 p-3 bg-info bg-opacity-10 rounded">
            <p className="text-info mb-0 small">
              <i className="bi bi-info-circle me-2"></i>
              Make sure to add your income and expenses in the Budget Tracker above, then click the button to get your personalized analysis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIFinancialAdvisor;
