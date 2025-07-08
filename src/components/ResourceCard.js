import React, { useState } from 'react';

function ResourceCard({ title, description, icon, resources, bgColor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getBootstrapIcon = (iconName) => {
    const iconMap = {
      'building': 'bi-building',
      'credit-card': 'bi-credit-card',
      'briefcase': 'bi-briefcase',
      'book-open': 'bi-book'
    };
    return iconMap[iconName] || 'bi-circle';
  };

  return (
    <div className={`card card-custom ${bgColor}`} data-name="resource-card" data-file="src/components/ResourceCard.js">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <i className={`${getBootstrapIcon(icon)} fs-3 me-3 text-primary`}></i>
            <h4 className="card-title mb-0">{title}</h4>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-link text-primary p-0"
          >
            <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'} fs-5`}></i>
          </button>
        </div>
        
        <p className="text-muted mb-3">{description}</p>
        
        {isExpanded && (
          <div className="d-grid gap-2">
            {resources.map((resource, index) => (
              <div key={index} className="d-flex align-items-center p-2 bg-light rounded">
                <i className="bi bi-check-circle text-success me-2"></i>
                <span className="text-dark small">{resource}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceCard;
