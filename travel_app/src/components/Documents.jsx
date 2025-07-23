import React, { useState } from "react";
import { Plus, FileText, AlertTriangle, CheckCircle, Calendar, Upload } from "lucide-react";

const Documents = () => {
    const [documents, setDocuments] = useState([
        {
          id: 1,
          name: 'Passport',
          type: 'passport',
          number: 'P123456789',
          issueDate: '2019-05-15',
          expiryDate: '2029-05-14',
          issuingCountry: 'United States',
          status: 'valid'
        },
        {
          id: 2,
          name: 'Travel Insurance',
          type: 'insurance',
          number: 'INS789456123',
          issueDate: '2024-01-10',
          expiryDate: '2024-12-31',
          provider: 'Travel Safe Insurance',
          status: 'valid'
        },
        {
          id: 3,
          name: 'Flight Confirmation',
          type: 'ticket',
          number: 'AF007-ABC123',
          bookingDate: '2024-01-05',
          travelDate: '2024-02-15',
          airline: 'Air France',
          status: 'confirmed'
        },
        {
          id: 4,
          name: 'Hotel Reservation',
          type: 'accommodation',
          number: 'HTL456789',
          bookingDate: '2024-01-05',
          checkIn: '2024-02-15',
          checkOut: '2024-02-20',
          hotel: 'Hotel de Crillon',
          status: 'confirmed'
        },
        {
          id: 5,
          name: 'Driver\'s License',
          type: 'license',
          number: 'DL987654321',
          issueDate: '2020-03-10',
          expiryDate: '2025-03-09',
          state: 'New York',
          status: 'expiring_soon'
        }
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newDocument, setNewDocument] = useState({
        name: '',
        type: 'passport',
        number: '',
        issueDate: '',
        expiryDate: '',
        additionalInfo: ''
    });

    const documentTypes = {
        passport: { icon: '📘', label: 'Passport', color: 'bg-blue-100 text-blue-700' },
        visa: { icon: '📄', label: 'Visa', color: 'bg-purple-100 text-purple-700' },
        ticket: { icon: '✈️', label: 'Flight Ticket', color: 'bg-sky-100 text-sky-700' },
        accommodation: { icon: '🏨', label: 'Hotel Booking', color: 'bg-green-100 text-green-700' },
        insurance: { icon: '🛡️', label: 'Travel Insurance', color: 'bg-orange-100 text-orange-700' },
        license: { icon: '🚗', label: 'Driver\'s License', color: 'bg-gray-100 text-gray-700' },
        vaccination: { icon: '💉', label: 'Vaccination Card', color: 'bg-red-100 text-red-700' },
        other: { icon: '📋', label: 'Other Document', color: 'bg-indigo-100 text-indigo-700' }
    };

    const getStatusInfo = (document) => {
      const today = new Date();
      const expiryDate = new Date(document.expiryDate);
      const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

      if (daysUntilExpiry < 0) {
        return { status: 'expired', label: 'Expired', color: 'bg-red-100 text-red-700 border-red-200', icon: AlertTriangle };
      } else if (daysUntilExpiry <= 90) {
        return { status: 'expiring_soon', label: 'Expiring Soon', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: AlertTriangle };
      } else {
        return { status: 'valid', label: 'Valid', color: 'bg-green-100 text-green-700 border-green-200', icon: CheckCircle };
      }
    };

    const addDocument = (e) => {
       e.preventDefault();
       const document = {
         ...newDocument,
         id: Date.now(),
         status: 'valid'
       };
       setDocuments([...documents, document]);
       setNewDocument({
         name: '',
         type: 'passport',
         number: '',
         issueDate: '',
         expiryDate: '',
         additionalInfo: ''
        });
       setShowAddForm(false);
    };

    const deleteDocument = (id) => {
      setDocuments(documents.filter(doc => doc.id !== id));
    };

    const getExpiryWarnings = () => {
      return documents.filter(doc => {
        if (!doc.expiryDate) return false;
        const statusInfo = getStatusInfo(doc);
        return statusInfo.status === 'expired' || statusInfo.status === 'expiring_soon';
      });
    };

    const warnings = getExpiryWarnings();

    return (
        <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Travel Documents</h2>
        <p className="text-gray-600">Keep all your important travel documents organized and track expiry dates</p>
      </div>

      {/* Warnings Alert */}
      {warnings.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800 mb-2">Document Expiry Alerts</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                {warnings.map(doc => {
                  const statusInfo = getStatusInfo(doc);
                  const daysUntilExpiry = Math.ceil((new Date(doc.expiryDate) - new Date()) / (1000 * 60 * 60 * 24));
                  return (
                    <li key={doc.id}>
                      <strong>{doc.name}</strong> {statusInfo.status === 'expired' ? 'has expired' : `expires in ${daysUntilExpiry} days`}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Add Document Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddForm(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Document</span>
        </button>
      </div>

      {/* Add Document Form */}
      {showAddForm && (
        <div className="card p-6 mb-8 border-2 border-ocean-200">
          <h3 className="text-xl font-semibold mb-4">Add New Document</h3>
          <form onSubmit={addDocument} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Document Name</label>
              <input
                type="text"
                value={newDocument.name}
                onChange={(e) => setNewDocument({...newDocument, name: e.target.value})}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
              <select
                value={newDocument.type}
                onChange={(e) => setNewDocument({...newDocument, type: e.target.value})}
                className="input-field"
              >
                {Object.entries(documentTypes).map(([key, type]) => (
                  <option key={key} value={key}>{type.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Document Number</label>
              <input
                type="text"
                value={newDocument.number}
                onChange={(e) => setNewDocument({...newDocument, number: e.target.value})}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Issue Date</label>
              <input
                type="date"
                value={newDocument.issueDate}
                onChange={(e) => setNewDocument({...newDocument, issueDate: e.target.value})}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input
                type="date"
                value={newDocument.expiryDate}
                onChange={(e) => setNewDocument({...newDocument, expiryDate: e.target.value})}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
              <input
                type="text"
                value={newDocument.additionalInfo}
                onChange={(e) => setNewDocument({...newDocument, additionalInfo: e.target.value})}
                className="input-field"
                placeholder="Issuing authority, provider, etc."
              />
            </div>
            <div className="md:col-span-2 flex space-x-4">
              <button type="submit" className="btn-primary">
                Add Document
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Documents List */}
      <div className="space-y-4">
        {documents.length === 0 ? (
          <div className="text-center py-12 card">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-500 mb-2">No documents added</h3>
            <p className="text-gray-400 mb-6">Start organizing your travel documents by adding your first document!</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary"
            >
              Add First Document
            </button>
          </div>
        ) : (
          documents.map(document => {
            const statusInfo = getStatusInfo(document);
            const StatusIcon = statusInfo.icon;
            
            return (
              <div key={document.id} className="card p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-lg text-sm font-medium ${documentTypes[document.type].color}`}>
                        {documentTypes[document.type].icon} {documentTypes[document.type].label}
                      </span>
                      {document.expiryDate && (
                        <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${statusInfo.color} flex items-center space-x-1`}>
                          <StatusIcon className="h-4 w-4" />
                          <span>{statusInfo.label}</span>
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{document.name}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      {document.number && (
                        <div>
                          <span className="text-gray-500">Number:</span>
                          <span className="ml-2 font-medium">{document.number}</span>
                        </div>
                      )}
                      {document.issueDate && (
                        <div>
                          <span className="text-gray-500">Issued:</span>
                          <span className="ml-2 font-medium">{new Date(document.issueDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {document.expiryDate && (
                        <div>
                          <span className="text-gray-500">Expires:</span>
                          <span className="ml-2 font-medium">{new Date(document.expiryDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {document.issuingCountry && (
                        <div>
                          <span className="text-gray-500">Country:</span>
                          <span className="ml-2 font-medium">{document.issuingCountry}</span>
                        </div>
                      )}
                      {document.provider && (
                        <div>
                          <span className="text-gray-500">Provider:</span>
                          <span className="ml-2 font-medium">{document.provider}</span>
                        </div>
                      )}
                      {document.airline && (
                        <div>
                          <span className="text-gray-500">Airline:</span>
                          <span className="ml-2 font-medium">{document.airline}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button className="p-2 text-gray-400 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors">
                      <Upload className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => deleteDocument(document.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <AlertTriangle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
    );
};

export default Documents;