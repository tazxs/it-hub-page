import React, { useState, useEffect } from 'react';

const AdminPreview = () => {
  const [messages, setMessages] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [messagesRes, subscribersRes] = await Promise.all([
          fetch('http://localhost:3001/api/admin/messages'),
          fetch('http://localhost:3001/api/admin/newsletter')
        ]);

        if (!messagesRes.ok || !subscribersRes.ok) throw new Error("API Fetch failed");

        const msgData = await messagesRes.json();
        const subData = await subscribersRes.json();

        setMessages(msgData.data || []);
        setSubscribers(subData.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="pt-32 text-center text-white min-h-screen bg-black">Loading...</div>;
  if (error) return <div className="pt-32 text-center text-red-500 min-h-screen bg-black">Error: {error}</div>;

  const handleExport = () => {
    alert("This is a mock export. In a real environment, this would trigger a CSV download of the selected tables.");
  };

  return (
    <div className="pt-24 pb-20 font-sans bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold font-headings text-accent">Admin Dashboard Preview</h1>
          <button 
            onClick={handleExport}
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded border border-gray-700 hover:bg-accent hover:text-black transition-colors"
          >
            Export to CSV
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Messages Table */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-headings">Contact Messages</h2>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {messages.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-4 text-center text-gray-500">No messages found.</td>
                    </tr>
                  ) : (
                    messages.map(msg => (
                      <tr key={msg.id} className="hover:bg-gray-800/50">
                        <td className="p-4">{msg.name}</td>
                        <td className="p-4">{msg.email}</td>
                        <td className="p-4">{msg.subject}</td>
                        <td className="p-4">{new Date(msg.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Newsletter Subscribers Table */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-headings">Newsletter Subscribers</h2>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="p-4">Email</th>
                    <th className="p-4">Subscribed At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {subscribers.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="p-4 text-center text-gray-500">No subscribers found.</td>
                    </tr>
                  ) : (
                    subscribers.map(sub => (
                      <tr key={sub.id} className="hover:bg-gray-800/50">
                        <td className="p-4">{sub.email}</td>
                        <td className="p-4">{new Date(sub.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPreview;
