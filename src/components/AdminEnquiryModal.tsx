import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { EnquirySubmission } from '../types';
import { X, ShieldCheck, Download, Trash2, Mail, Building, Calendar, Layers } from 'lucide-react';

export const AdminEnquiryModal: React.FC = () => {
  const { isAdminEnquiriesOpen, setIsAdminEnquiriesOpen } = useNavigation();
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);

  useEffect(() => {
    if (isAdminEnquiriesOpen) {
      loadEnquiries();
    }
  }, [isAdminEnquiriesOpen]);

  const loadEnquiries = () => {
    try {
      const data = localStorage.getItem('goodfolk_enquiries');
      if (data) {
        setEnquiries(JSON.parse(data));
      } else {
        setEnquiries([]);
      }
    } catch {
      setEnquiries([]);
    }
  };

  const handleClear = () => {
    if (window.confirm('Clear stored local enquiry records?')) {
      localStorage.removeItem('goodfolk_enquiries');
      setEnquiries([]);
    }
  };

  const handleExport = () => {
    const jsonStr = JSON.stringify(enquiries, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `goodfolk_enquiries_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAdminEnquiriesOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B2521]/75 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#4B3025]/20 text-[#2B2521]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#4B3025] text-[#FFFDF8] border-b border-[#4B3025]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#F2C94C] text-[#4B3025]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold font-['Manrope']">
                Agency Submissions Vault &amp; Pipeline Architecture
              </h2>
              <p className="text-xs text-[#E9D9A8]/80">
                Phase 1 Local Submission Ledger · Phase 2 Admin Ready
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminEnquiriesOpen(false)}
            className="p-1 rounded-lg text-[#FFFDF8]/70 hover:text-[#FFFDF8] hover:bg-[#FFFDF8]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Architecture Roadmap Notice */}
          <div className="bg-[#FAF5E8] p-4 rounded-xl border border-[#E9D9A8] text-xs text-[#2B2521]/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#4B3025] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#4B3025]" />
              <span>Phase 2 Admin Dashboard Readiness Specification</span>
            </div>
            <p>
              This ledger stores real lead enquiries submitted through the Goodfolk website in browser storage (`localStorage: goodfolk_enquiries`). The architecture is structured for zero-friction migration into a dedicated Cloud SQL / Firebase private agency portal featuring client quotation generators, UPI/wire tracking, and milestone invoice releases.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-[#4B3025]">
              Recorded Enquiries ({enquiries.length})
            </div>
            <div className="flex items-center gap-2">
              {enquiries.length > 0 && (
                <>
                  <button
                    onClick={handleExport}
                    className="px-3 py-1.5 text-xs font-medium text-[#4B3025] bg-white border border-[#4B3025]/20 hover:bg-[#FAF5E8] rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export JSON</span>
                  </button>
                  <button
                    onClick={handleClear}
                    className="px-3 py-1.5 text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Enquiries List */}
          {enquiries.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-xl border border-dashed border-[#4B3025]/20 bg-[#FAF5E8]/30">
              <p className="text-sm font-medium text-[#4B3025]">No enquiries submitted yet</p>
              <p className="text-xs text-[#2B2521]/60 mt-1 max-w-sm mx-auto">
                Test the enquiry form on the Contact page or Homepage preview to see real submission records appear here immediately.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {enquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="p-5 rounded-xl bg-white border border-[#4B3025]/15 shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#4B3025]/10">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#4B3025] bg-[#E9D9A8]/40 px-2 py-0.5 rounded">
                        REF: {enq.id}
                      </span>
                      <h4 className="text-base font-bold text-[#4B3025] mt-1 font-['Manrope']">
                        {enq.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#2B2521]/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#4B3025]" />
                        {new Date(enq.submittedAt).toLocaleDateString()}
                      </span>
                      <span className="px-2 py-0.5 bg-[#F2C94C]/30 text-[#4B3025] font-semibold rounded">
                        {enq.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#2B2521]/80">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#4B3025]" />
                      <span className="font-medium">{enq.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#4B3025]" />
                      <span>{enq.company || 'Not specified'}</span>
                    </div>
                    <div>
                      <span className="text-[#2B2521]/50">Service: </span>
                      <span className="font-semibold text-[#4B3025]">{enq.service}</span>
                    </div>
                  </div>

                  <div className="bg-[#FAF5E8]/60 p-3 rounded-lg text-xs text-[#2B2521]/90">
                    <p className="font-semibold text-[#4B3025] mb-1">Project Brief:</p>
                    <p className="whitespace-pre-wrap">{enq.projectDetails}</p>
                  </div>

                  {(enq.budget || enq.deadline) && (
                    <div className="flex gap-4 text-xs text-[#2B2521]/60 pt-1">
                      {enq.budget && <span>Budget: {enq.budget}</span>}
                      {enq.deadline && <span>Target: {enq.deadline}</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
