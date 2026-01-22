export default function DashboardLayout({ children, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                📊 Dashboard Admin NIS2
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Gestion des audits de conformité
              </p>
            </div>
            
            {onLogout && (
              <button
                onClick={onLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2"
              >
                <span>🚪</span>
                <span>Déconnexion</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-600">
            © 2026 Cyber Solferino • Dashboard Administrateur
          </p>
        </div>
      </footer>
    </div>
  );
}
