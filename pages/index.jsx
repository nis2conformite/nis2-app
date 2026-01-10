import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* TOP BANNER */}
      <div style={{
        background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: 500
      }}>
        🎉 150+ PME déjà conformes avec nous. <a href="/cas-clients" style={{color: '#FFFFFF', textDecoration: 'underline', marginLeft: '8px'}}>En savoir plus →</a>
      </div>

      {/* NAVIGATION */}
      <nav style={{
        position: 'sticky',
        top: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E5E7EB',
        zIndex: 100,
        padding: '16px 0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '22px',
            fontWeight: 700,
            color: '#1F2937'
          }}>
            🔒 Cyber Solférino
          </div>

          <div style={{display: 'flex', gap: '32px', alignItems: 'center'}}>
            <button style={{fontSize: '15px', fontWeight: 500, color: '#1F2937', background: 'none', border: 'none', cursor: 'pointer'}}>Solutions</button>
            <button style={{fontSize: '15px', fontWeight: 500, color: '#1F2937', background: 'none', border: 'none', cursor: 'pointer'}}>Ressources</button>
            <a href="/qui-sommes-nous" style={{fontSize: '15px', fontWeight: 500, color: '#1F2937'}}>À propos</a>
          </div>

          <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
            <a href="/login" style={{fontSize: '15px', fontWeight: 500, color: '#1F2937'}}>Connexion</a>
            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" style={{
              background: '#8B5CF6',
              color: '#FFFFFF',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}>
              Prendre RDV →
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        padding: '100px 32px 60px',
        background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            color: '#1F2937'
          }}>
            Automatisez Votre Conformité NIS2 Avec Une Plateforme{' '}
            <span style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Pilotée Par Des Experts
            </span>
          </h1>

          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: '#6B7280',
            marginBottom: '40px',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Équipez votre équipe avec les meilleurs outils de conformité et notre équipe d'experts certifiés ISO 27001, 
            qui automatisent l'intégralité de votre workflow de mise en conformité.
          </p>

          <div style={{display: 'flex', gap: '12px', maxWidth: '520px', margin: '0 auto 16px'}}>
            <input 
              type="email" 
              placeholder="Email professionnel"
              style={{
                flex: 1,
                padding: '14px 20px',
                background: '#FFFFFF',
                border: '2px solid #E5E7EB',
                borderRadius: '10px',
                fontSize: '15px',
                fontFamily: 'inherit'
              }}
            />
            <button style={{
              padding: '14px 32px',
              background: '#8B5CF6',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Démarrer
            </button>
          </div>

          <p style={{fontSize: '14px', color: '#9CA3AF', marginBottom: '60px'}}>
            Audit gratuit • Résultat en 48h
          </p>

          {/* DASHBOARD MOCKUP IMAGE */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            overflow: 'hidden',
            border: '1px solid #E5E7EB',
            marginTop: '60px'
          }}>
            <div style={{
              background: '#F9FAFB',
              padding: '12px 16px',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{display: 'flex', gap: '6px'}}>
                <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444'}}></div>
                <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B'}}></div>
                <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#10B981'}}></div>
              </div>
              <div style={{
                background: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#6B7280'
              }}>
                🔒 cyber-solferino.fr
              </div>
            </div>
            <div style={{
              display: 'flex',
              minHeight: '400px',
              background: '#FFFFFF'
            }}>
              <div style={{
                width: '240px',
                background: '#F9FAFB',
                borderRight: '1px solid #E5E7EB',
                padding: '20px'
              }}>
                <div style={{
                  background: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#8B5CF6',
                  fontWeight: 600,
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  📊 Dashboard
                </div>
                <div style={{
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#6B7280',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  👥 Leads (1202)
                </div>
                <div style={{
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#6B7280',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  ✅ Conformité
                </div>
              </div>
              <div style={{flex: 1, padding: '24px'}}>
                {[
                  {name: 'Sophie Durand', email: 'sophie.durand@techworld.com', company: 'Techworld', progress: 78, status: 'Conforme', color: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'},
                  {name: 'Marc Lefebvre', email: 'marc.lefebvre@globaltech.com', company: 'Globaltech', progress: 45, status: 'En cours', color: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'},
                  {name: 'Anne Petit', email: 'anne.petit@pinkus.io', company: 'Pinkus', progress: 92, status: 'Conforme', color: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)'}
                ].map((lead, i) => (
                  <div key={i} style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto auto',
                    gap: '16px',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: lead.color
                    }}></div>
                    <div>
                      <div style={{fontSize: '14px', fontWeight: 600, color: '#1F2937', marginBottom: '2px'}}>
                        {lead.name}
                      </div>
                      <div style={{fontSize: '13px', color: '#6B7280'}}>
                        {lead.email}
                      </div>
                    </div>
                    <div style={{minWidth: '140px'}}>
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: '#E5E7EB',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        marginBottom: '4px'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${lead.progress}%`,
                          background: '#8B5CF6',
                          borderRadius: '3px'
                        }}></div>
                      </div>
                      <div style={{fontSize: '12px', color: '#6B7280'}}>
                        {lead.company}
                      </div>
                    </div>
                    <div style={{
                      padding: '6px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: lead.status === 'Conforme' ? '#D1FAE5' : '#FEF3C7',
                      color: lead.status === 'Conforme' ? '#065F46' : '#92400E'
                    }}>
                      {lead.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS MARQUEE */}
      <section style={{padding: '60px 0', overflow: 'hidden', background: '#FFFFFF'}}>
        <div style={{display: 'flex', gap: '80px', animation: 'scroll 30s linear infinite'}}>
          {['SaaStr', 'COOK UNITY', 'sumup', 'arc', 'RAISE', 'SalesScreen', 'Snibbs', 'SaaStr', 'COOK UNITY', 'sumup'].map((logo, i) => (
            <span key={i} style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#D1D5DB',
              whiteSpace: 'nowrap'
            }}>
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{padding: '120px 32px'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <p style={{
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#8B5CF6',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Le Futur est Consolidé
          </p>

          <h2 style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            marginBottom: '16px',
            color: '#1F2937'
          }}>
            Tous Les Outils Dont Vous Avez Besoin, Consolidés En{' '}
            <span style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Une Seule Plateforme Exceptionnelle
            </span>
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#6B7280',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 80px'
          }}>
            Nous construisons le nouveau paradigme du logiciel – élégant, intuitif et facile à utiliser.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px'}}>
            {/* BEFORE */}
            <div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 700,
                marginBottom: '32px',
                textAlign: 'center',
                color: '#1F2937'
              }}>
                Avant Cyber Solférino
              </h3>
              <div style={{
                background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)',
                border: '2px solid #E5E7EB',
                borderRadius: '20px',
                padding: '60px 40px',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
                  {[
                    {icon: '⚖️', name: "Cabinet d'avocats"},
                    {icon: '💻', name: 'Prestataire IT'},
                    {icon: '👤', name: 'Consultant'},
                    {icon: '📚', name: 'Formation'},
                    {icon: '🔐', name: 'Expert ANSSI'},
                    {icon: '🛡️', name: 'RSSI'}
                  ].map((tool, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{fontSize: '40px'}}>{tool.icon}</div>
                      <span style={{fontSize: '12px', color: '#6B7280', lineHeight: 1.3}}>
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AFTER */}
            <div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 700,
                marginBottom: '32px',
                textAlign: 'center',
                background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Après Cyber Solférino
              </h3>
              <div style={{
                background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)',
                border: '2px solid #C4B5FD',
                borderRadius: '20px',
                padding: '60px 40px',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  {[
                    {icon: '✅', name: 'Audit NIS2'},
                    {icon: '📚', name: 'Formations'},
                    {icon: '📄', name: 'Documents'},
                    {icon: '📅', name: "Plan d'action"},
                    {icon: '🔐', name: 'Déclaration ANSSI'},
                    {icon: '💰', name: 'Aides État'}
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 600,
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px'
                      }}>
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section style={{padding: '120px 32px', background: '#F9FAFB'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <p style={{
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#8B5CF6',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Le Futur est Consolidé
          </p>

          <h2 style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.2,
            textAlign: 'center',
            marginBottom: '16px',
            color: '#1F2937'
          }}>
            Rencontrez Vos Futurs Collègues,{' '}
            <span style={{
              background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Les Experts
            </span>
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#6B7280',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 80px'
          }}>
            Nos experts libèrent le plein potentiel de votre équipe en automatisant les tâches répétitives 
            et chronophages qui les ralentissent.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px'}}>
            {[
              {icon: '🔐', title: "L'Expert Conformité", role: 'Audit & Analyse NIS2', bg: 'linear-gradient(135deg, #E0F2FE 0%, #DBEAFE 100%)'},
              {icon: '📚', title: 'Le Formateur', role: 'Formation & Sensibilisation', bg: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)'},
              {icon: '💼', title: 'Le Consultant', role: 'Accompagnement ANSSI', bg: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'}
            ].map((expert, i) => (
              <div key={i} style={{textAlign: 'center'}}>
                <div style={{
                  background: expert.bg,
                  borderRadius: '20px',
                  padding: '60px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '300px',
                  fontSize: '120px'
                }}>
                  {expert.icon}
                </div>
                <h3 style={{fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#1F2937'}}>
                  {expert.title}
                </h3>
                <p style={{fontSize: '16px', color: '#6B7280'}}>
                  {expert.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding: '120px 32px',
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)'
      }}>
        <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#FFFFFF',
              marginBottom: '24px'
            }}>
              Prêt À Recruter Nos Experts et Booster Votre Équipe ?
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '40px'
            }}>
              Nos experts sont équipés des meilleurs outils de conformité pour automatiser votre mise en conformité, 
              libérant le temps de vos équipes pour qu'elles se concentrent sur la conclusion de deals.
            </p>
            <a href="https://calendly.com/nis2conformite/30min" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 40px',
              background: '#FFFFFF',
              color: '#1E1B4B',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 600
            }}>
              Prendre rendez-vous →
            </a>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
            borderRadius: '20px',
            padding: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            fontSize: '120px'
          }}>
            🚀
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '80px 32px 40px',
        background: '#1F2937',
        color: '#FFFFFF'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '60px',
          marginBottom: '40px'
        }}>
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Solutions
            </h4>
            {['Audit NIS2', 'Formations', 'Accompagnement', 'Services'].map(item => (
              <a key={item} href="#" style={{
                display: 'block',
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '12px'
              }}>
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Ressources
            </h4>
            {['Comprendre NIS2', 'Blog', 'Cas clients', 'FAQ'].map(item => (
              <a key={item} href="#" style={{
                display: 'block',
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '12px'
              }}>
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Entreprise
            </h4>
            {['À propos', 'Carrières', 'Contact'].map(item => (
              <a key={item} href="#" style={{
                display: 'block',
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '12px'
              }}>
                {item}
              </a>
            ))}
          </div>

          <div>
            <div style={{fontSize: '22px', fontWeight: 700, marginBottom: '16px'}}>
              🔒 Cyber Solférino
            </div>
            <p style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px'}}>
              © 2025 Cyber Solférino. Tous droits réservés.
            </p>
            <div style={{display: 'flex', gap: '16px'}}>
              <a href="#" style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)'}}>CGU</a>
              <a href="#" style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)'}}>Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div onClick={() => setShowVideo(false)} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            aspectRatio: '16/9'
          }}>
            <button onClick={() => setShowVideo(false)} style={{
              position: 'absolute',
              top: '-40px',
              right: 0,
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '32px',
              cursor: 'pointer'
            }}>
              ×
            </button>
            <iframe
              src="https://www.youtube.com/embed/461tWBUzrY8?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{width: '100%', height: '100%', border: 'none', borderRadius: '12px'}}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          h1 { font-size: 36px !important; }
          h2 { font-size: 32px !important; }
          h3 { font-size: 20px !important; }
          
          [style*="grid-template-columns: repeat(2, 1fr)"],
          [style*="grid-template-columns: repeat(3, 1fr)"],
          [style*="grid-template-columns: repeat(4, 1fr)"],
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
