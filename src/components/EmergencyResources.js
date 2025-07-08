import React from 'react';

function EmergencyResources() {
  const emergencyContacts = [
    { name: "Die Dargebotene Hand", description: "24/7 crisis helpline and counseling", phone: "143" },
    { name: "Pro Juventute", description: "Children and youth counseling", phone: "147" },
    { name: "Caritas Switzerland", description: "Social services and financial assistance", phone: "041 419 22 22" },
    { name: "Schweizerisches Rotes Kreuz", description: "Emergency aid and social support", phone: "031 387 71 11" },
    { name: "Sozialamt", description: "Local social welfare office", phone: "Contact your municipality" }
  ];

  return (
    <div className="card card-custom bg-danger bg-opacity-10 border-danger" data-name="emergency-resources" data-file="src/components/EmergencyResources.js">
      <div className="card-body">
        <h3 className="card-title d-flex align-items-center mb-4 text-danger">
          <i className="bi bi-telephone fs-3 me-3"></i>
          Emergency Resources
        </h3>
        
        <div className="alert alert-danger mb-4">
          <i className="bi bi-exclamation-triangle me-2"></i>
          If you're in immediate financial crisis, don't hesitate to reach out for help.
        </div>

        <div className="d-grid gap-3">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="emergency-card">
              <div className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1">
                  <h5 className="fw-semibold text-danger mb-1">{contact.name}</h5>
                  <p className="text-muted small mb-0">{contact.description}</p>
                </div>
                <div className="text-end">
                  <p className="fw-bold text-danger mb-0">{contact.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-warning mt-4">
          <i className="bi bi-info-circle me-2"></i>
          Remember: Seeking help is a sign of strength, not weakness. Many people have overcome financial difficulties with the right support.
        </div>
      </div>
    </div>
  );
}

export default EmergencyResources;
