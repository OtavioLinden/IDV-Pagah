import React, { useState, useEffect } from 'react';
import CompanyCard from './components/CompanyCard';
import { Terminal, Clock, Shield, Plus, X, Building2, User2, MessageSquare, ToggleLeft, Calendar, Activity, Trash2, CheckCircle } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useToast } from './components/Toast';

const App = () => {
  const { showToast } = useToast();
  const [data, setData] = useState([]);
  const [availableAgents, setAvailableAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());
  const [modalMode, setModalMode] = useState(null); // null | 'create' | 'edit'
  const [editingCompanyId, setEditingCompanyId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreatingWAHASession, setIsCreatingWAHASession] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(false);
  const [wahaSessions, setWahaSessions] = useState([]);
  const [newCompany, setNewCompany] = useState({
    Nome: '',
    id_Empresa: '',
    tipo_msg: 'pago',
    Atendente: '',
    Delay: 15,
    pode_repetir: true,
    ativo: true,
    Sessão: '',
    horario: {
      segunda: [], terca: [], quarta: [], quinta: [], sexta: [], sabado: [], domingo: []
    }
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const fetchData = async () => {
      try {
        const response = await fetch('https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas?select=*&order=id.desc', {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ`
          }
        });
        if (response.ok) {
          const empresasData = await response.json();
          setData(empresasData);
          console.log(`[SUCCESS] Loaded ${empresasData.length} companies from Supabase.`);
        }
      } catch (error) {
        console.error('[ERROR] Falha ao carregar dados live:', error);
      }

      try {
        const agentsRes = await fetch('/api/chatwoot/api/v1/accounts/1/agents', {
          headers: { 'api_access_token': 'qwFEz9XEHzf3wEFAqR7Qdg4q' }
        });
        if (agentsRes.ok) {
          const agentsData = await agentsRes.json();
          const formattedAgents = (agentsData.payload || agentsData).map(a => ({
            id: a.id,
            name: a.name || a.available_name
          }));
          setAvailableAgents(formattedAgents);
        }
      } catch (error) {
        console.error('[ERROR] Falha ao buscar agentes vivos:', error);
      }
      
      setLoading(false);
    };

    const fetchWahaSessions = async () => {
      try {
        const response = await fetch('/api/waha/api/sessions', {
          headers: { 'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T' }
        });
        if (response.ok) {
          const sessions = await response.json();
          setWahaSessions(sessions);
          console.log(`[SUCCESS] Loaded ${sessions.length} WAHA sessions.`);
        }
      } catch (error) {
        console.error('[ERROR] Falha ao carregar sessões WAHA:', error);
      }
    };

    fetchData();
    fetchWahaSessions();
    const wahaTimer = setInterval(fetchWahaSessions, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(wahaTimer);
    };
  }, []);

  // Bloquear scroll do fundo quando modais estão abertos
  useEffect(() => {
    if (modalMode || companyToDelete) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [modalMode, companyToDelete]);

  const sessionExists = wahaSessions.some(s => s.name === newCompany.Sessão);

  const stats = {
    totalCompanies: data.length,
    linkedInboxes: data.filter(d => d.Número_id || d.inboxId).length,
    totalAgents: data.reduce((acc, d) => acc + (d.agentes?.length || 0), 0),
    avgDelay: data.length > 0 ? (data.reduce((acc, d) => acc + (d.Delay || 0), 0) / data.length).toFixed(1) : 0
  };

  const handleToggleAtivo = async (id) => {
    const companyToUpdate = data.find(c => c.id === id);
    if (!companyToUpdate) return;

    const newAtivo = !companyToUpdate.ativo;

    // 1. Atualização Otimista no State
    setData(prev => prev.map(company => 
      company.id === id ? { ...company, ativo: newAtivo } : company
    ));

    try {
      const response = await fetch(`https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ ativo: newAtivo })
      });

      if (!response.ok) throw new Error('Falha na atualização remota');
      console.log(`[SUCCESS] Empresa ${id} atualizada para ${newAtivo}`);
    } catch (error) {
      console.error('[ERROR] Falha ao sincronizar com Supabase:', error);
      // Reverter em caso de erro
      setData(prev => prev.map(company => 
        company.id === id ? { ...company, ativo: !newAtivo } : company
      ));
    }
  };

  const handleUpdateCompany = async (id, updates) => {
    const originalCompany = data.find(c => c.id === id);
    if (!originalCompany) return;

    // 1. Atualização Otimista no State
    setData(prev => prev.map(company => 
      company.id === id ? { ...company, ...updates } : company
    ));

    try {
      const response = await fetch(`https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(updates)
      });

      if (!response.ok) throw new Error('Falha na atualização remota');
      console.log(`[SUCCESS] Empresa ${id} atualizada:`, updates);
    } catch (error) {
      console.error('[ERROR] Falha ao sincronizar com Supabase:', error, updates);
      // Reverter em caso de erro
      setData(prev => prev.map(company => 
        company.id === id ? originalCompany : company
      ));
      showToast('Falha ao salvar alterações no banco de dados. As alterações foram revertidas.', 'error');
    }
  };
  const handleDeleteCompany = async () => {
    if (!companyToDelete) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas?id=eq.${companyToDelete.id}`, {
        method: 'DELETE',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Falha ao deletar empresa');

      setData(prev => prev.filter(c => c.id !== companyToDelete.id));
      showToast(`Empresa "${companyToDelete.Nome}" removida com sucesso!`, 'success');
      setCompanyToDelete(null);
    } catch (error) {
      console.error('[ERROR] Falha ao deletar empresa:', error);
      showToast('Falha ao remover empresa do sistema.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSaveCompany = async () => {
    setIsSaving(true);
    const isEditing = modalMode === 'edit';
    
    try {
      const url = isEditing 
        ? `https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas?id=eq.${editingCompanyId}`
        : `https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas`;
        
      const response = await fetch(url, {
        method: isEditing ? 'PATCH' : 'POST',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          ...newCompany,
          id_Empresa: parseInt(newCompany.id_Empresa),
          Delay: parseInt(newCompany.Delay || 0),
          Sessão: newCompany.Sessão || null
        })
      });

      if (!response.ok) throw new Error(`Falha ao ${isEditing ? 'atualizar' : 'criar'} empresa`);
      
      const responseData = await response.json();
      const savedCompany = responseData[0];
      
      if (isEditing) {
        setData(prev => prev.map(c => c.id === editingCompanyId ? savedCompany : c));
      } else {
        setData(prev => [savedCompany, ...prev]);
      }

      setModalMode(null);
      setEditingCompanyId(null);
      setNewCompany({
        Nome: '',
        id_Empresa: '',
        tipo_msg: 'pago',
        Atendente: '',
        Delay: 15,
        pode_repetir: true,
        ativo: true,
        horario: {
          segunda: [], terca: [], quarta: [], quinta: [], sexta: [], sabado: [], domingo: []
        },
        Número_id: null
      });
      console.log(`[SUCCESS] Empresa ${isEditing ? 'atualizada' : 'criada'}:`, savedCompany);
      showToast(`Empresa "${savedCompany.Nome}" ${isEditing ? 'atualizada' : 'registrada'} com sucesso!`, 'success');
    } catch (error) {
      console.error(`[ERROR] Falha ao ${isEditing ? 'atualizar' : 'criar'} empresa:`, error);
      showToast(`Erro ao ${isEditing ? 'salvar' : 'criar'} empresa no banco de dados.`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCreateWAHASession = async () => {
    if (!newCompany.Sessão) {
      showToast("Por favor, defina um nome para a sessão primeiro.", "warning");
      return;
    }

    const isValid = /^[a-zA-Z0-9-]+$/.test(newCompany.Sessão);
    if (!isValid) {
      showToast("Nome de sessão inválido! Use apenas letras, números e hífens (-).", "error");
      return;
    }

    setIsCreatingWAHASession(true);
    try {
      const response = await fetch('/api/waha/api/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T'
        },
        body: JSON.stringify({ name: newCompany.Sessão })
      });

      if (response.ok) {
        showToast(`Sessão "${newCompany.Sessão}" criada com sucesso no WAHA!`, 'success');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao criar sessão no WAHA');
      }
    } catch (error) {
      console.error('[ERROR] Falha ao criar sessão WAHA:', error);
      showToast(error.message || "Erro ao criar sessão no WAHA.", "error");
    } finally {
      setIsCreatingWAHASession(false);
    }
  };

  const handleOpenCreateModal = () => {
    setNewCompany({
      Nome: '',
      id_Empresa: '',
      tipo_msg: 'pago',
      Atendente: '',
      Delay: 15,
      pode_repetir: true,
      ativo: true,
      Sessão: '',
      horario: {
        segunda: [], terca: [], quarta: [], quinta: [], sexta: [], sabado: [], domingo: []
      },
      Número_id: null
    });
    setEditingCompanyId(null);
    setModalMode('create');
  };

  const handleOpenEditModal = (company) => {
    setNewCompany({
      Nome: company.Nome || '',
      id_Empresa: company.id_Empresa || '',
      tipo_msg: company.tipo_msg || 'pago',
      Atendente: company.Atendente || '',
      Delay: company.Delay || 15,
      pode_repetir: company.pode_repetir ?? true,
      ativo: company.ativo ?? true,
      Sessão: company.Sessão || '',
      horario: company.horario || {
        segunda: [], terca: [], quarta: [], quinta: [], sexta: [], sabado: [], domingo: []
      }
    });
    setEditingCompanyId(company.id);
    setModalMode('edit');
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-accent rounded-2xl shadow-xl shadow-brand-accent/20">
                <Shield size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white mb-0 uppercase leading-none">
                  Centro de <span className="text-brand-accent">Comando</span>
                </h1>
                <p className="text-brand-text-dim text-[11px] font-bold tracking-[0.3em] uppercase mt-2">
                  Plataforma de Gestão Unificada // Versão 2.1
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <button 
              onClick={handleOpenCreateModal}
              className="flex items-center gap-3 px-6 py-3 bg-brand-accent hover:bg-amber-600 text-black rounded-2xl transition-all shadow-xl shadow-brand-accent/20 font-black uppercase tracking-widest text-[11px] group"
            >
              <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
              Nova Empresa
            </button>
            <div className="flex items-center gap-3 px-5 py-3 glass-panel border-white/10 w-fit">
              <Clock size={24} className="text-brand-accent animate-pulse-soft" />
              <span className="text-2xl font-bold font-mono tracking-tight text-white">
                {time.toLocaleTimeString()}
              </span>
            </div>
            <div className="flex gap-4 text-[10px] font-bold tracking-widest uppercase text-brand-text-dim">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-success rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Sincronismo Ativo
              </span>
              <span className="opacity-40">|</span>
              <span>Threads: {String(data.filter(d => d.ativo).length).padStart(2, '0')}</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-6 pt-8">

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 glass-panel border-dashed">
              <div className="w-12 h-12 border-4 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin mb-6 shadow-lg shadow-brand-accent/10"></div>
              <p className="text-brand-text font-bold tracking-widest animate-pulse">SINCRONIZANDO FLUXO DE DADOS...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 pb-20">
              {data.map((company, index) => (
                <CompanyCard 
                  key={company.id} 
                  company={company} 
                  index={index} 
                  availableAgents={availableAgents}
                  wahaSessions={wahaSessions}
                  onToggleAtivo={handleToggleAtivo}
                  onUpdateCompany={handleUpdateCompany}
                  onDelete={() => setCompanyToDelete(company)}
                  onEdit={() => handleOpenEditModal(company)}
                />
              ))}
            </div>
          )}
        </main>

        <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
            <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse-soft"></div>
            SISTEMA OPERACIONAL ESTÁVEL // CLI-V2.1
          </div>
          <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.4em]">
            Propriedade Exclusiva Liquid Motor // Centro de Comando 2026
          </p>
        </footer>
      </div>

      {/* Modal de Cadastro/Edição de Empresa */}
      {modalMode && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => !isSaving && setModalMode(null)}
          />
          
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 max-w-2xl w-full shadow-[0_0_100px_rgba(255,191,0,0.1)] max-h-[90vh] overflow-y-auto scrollbar-premium">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-brand-accent rounded-2xl text-black">
                  <Building2 size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                    {modalMode === 'edit' ? 'Editar Registro' : 'Registrar Empresa'}
                  </h2>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">
                    {modalMode === 'edit' ? 'Sincronização de parâmetros técnicos' : 'Configuração de novo nó no sistema'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setModalMode(null)}
                className="p-3 hover:bg-white/5 rounded-full transition-colors text-neutral-500 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-4">Nome da Entidade</label>
                <input 
                  type="text"
                  placeholder="Ex: Empresa Ltda"
                  value={newCompany.Nome}
                  onChange={(e) => setNewCompany({...newCompany, Nome: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-brand-accent/30 transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-4">ID Empresa (Numérico)</label>
                <input 
                  type="number"
                  placeholder="Ex: 102"
                  value={newCompany.id_Empresa}
                  onChange={(e) => setNewCompany({...newCompany, id_Empresa: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-brand-accent/30 transition-all font-medium font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-4">Tipo de Mensagem</label>
                <select 
                  value={newCompany.tipo_msg}
                  onChange={(e) => setNewCompany({...newCompany, tipo_msg: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-accent/30 transition-all font-medium appearance-none select-custom"
                >
                  <option value="Abandono" className="bg-[#0a0a0a]">ABANDONO</option>
                  <option value="gerado" className="bg-[#0a0a0a]">GERADO</option>
                  <option value="pago" className="bg-[#0a0a0a]">PAGO</option>
                  <option value="chargeback" className="bg-[#0a0a0a]">CHARGEBACK</option>
                  <option value="estorno" className="bg-[#0a0a0a]">ESTORNO</option>
                  <option value="recusado" className="bg-[#0a0a0a]">RECUSADO</option>
                  <option value="pix_expirado" className="bg-[#0a0a0a]">PIX EXPIRADO</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-4">Atendente / Responsável</label>
                <input 
                  type="text"
                  placeholder="Ex: Alan"
                  value={newCompany.Atendente}
                  onChange={(e) => setNewCompany({...newCompany, Atendente: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-brand-accent/30 transition-all font-medium"
                />
              </div>

              <div className="space-y-2 col-span-1 md:col-span-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-4">Nome da Sessão WAHA</label>
                <div className="flex gap-3">
                  <input 
                    type="text"
                    placeholder="Ex: sessao_oficial"
                    value={newCompany.Sessão}
                    onChange={(e) => setNewCompany({...newCompany, Sessão: e.target.value})}
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-brand-accent/30 transition-all font-medium font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleCreateWAHASession}
                    disabled={isCreatingWAHASession || isCheckingSession || !newCompany.Sessão || sessionExists}
                    className={`px-6 py-4 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2 border ${
                      sessionExists 
                        ? 'bg-neutral-800 text-neutral-500 border-white/5 cursor-not-allowed'
                        : 'bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-black border-brand-accent/20'
                    }`}
                  >
                    {isCreatingWAHASession || isCheckingSession ? (
                      <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : sessionExists ? (
                      <Shield size={14} className="opacity-50" />
                    ) : (
                      <Plus size={14} />
                    )}
                    {isCheckingSession ? 'VERIFICANDO...' : isCreatingWAHASession ? 'CRIANDO...' : sessionExists ? 'SESSÃO JÁ EXISTE' : 'CRIAR NO WAHA'}
                  </button>
                </div>
              </div>

              <div className="space-y-2 col-span-1 md:col-span-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-4">Delay de Resposta (Segundos)</label>
                <div className="relative">
                  <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-accent" />
                  <input 
                    type="number"
                    placeholder="Ex: 15"
                    value={newCompany.Delay}
                    onChange={(e) => setNewCompany({...newCompany, Delay: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-white placeholder:text-neutral-700 focus:outline-none focus:border-brand-accent/30 transition-all font-medium font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 glass-panel border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                  <ToggleLeft size={18} className="text-brand-accent" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Pode Repetir</span>
                </div>
                <button 
                  onClick={() => setNewCompany({...newCompany, pode_repetir: !newCompany.pode_repetir})}
                  className={`relative w-10 h-5 rounded-full transition-colors ${newCompany.pode_repetir ? 'bg-brand-success/20' : 'bg-neutral-800'}`}
                >
                  <div className={`absolute top-1 left-1 w-3 h-3 rounded-full transition-all ${newCompany.pode_repetir ? 'translate-x-5 bg-brand-success' : 'bg-neutral-600'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 glass-panel border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Activity size={18} className="text-brand-success" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Sistema Ativo</span>
                </div>
                <button 
                  onClick={() => setNewCompany({...newCompany, ativo: !newCompany.ativo})}
                  className={`relative w-10 h-5 rounded-full transition-colors ${newCompany.ativo ? 'bg-brand-success/20' : 'bg-neutral-800'}`}
                >
                  <div className={`absolute top-1 left-1 w-3 h-3 rounded-full transition-all ${newCompany.ativo ? 'translate-x-5 bg-brand-success' : 'bg-neutral-600'}`} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setModalMode(null)}
                disabled={isSaving}
                className="flex-1 py-4 text-[10px] font-black text-neutral-500 hover:text-white uppercase tracking-widest border border-white/5 hover:bg-white/5 rounded-xl transition-all"
              >
                Descartar
              </button>
              <button 
                onClick={handleSaveCompany}
                disabled={isSaving || !newCompany.Nome || !newCompany.id_Empresa}
                className="flex-[2] py-4 bg-brand-accent hover:bg-amber-600 disabled:opacity-30 text-black text-[10px] font-black rounded-xl transition-all uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3"
              >
                {isSaving ? (
                  <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  <Shield size={16} />
                )}
                <span>{isSaving ? 'PROCESSANDO...' : (modalMode === 'edit' ? 'ATUALIZAR DADOS' : 'REGISTRAR NO SISTEMA')}</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Modal de Confirmação de Deleção */}
      {companyToDelete && createPortal(
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => !isDeleting && setCompanyToDelete(null)}
          />
          
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 max-w-md w-full shadow-[0_0_100px_rgba(239,68,68,0.15)] overflow-hidden">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500">
                <Trash2 size={32} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-black text-white uppercase tracking-tight">Confirmar Exclusão</h2>
                <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest leading-relaxed px-4">
                  Você está prestes a remover <span className="text-white font-black">"{companyToDelete.Nome}"</span> permanentemente do sistema. Esta ação não pode ser desfeita.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button 
                onClick={() => setCompanyToDelete(null)}
                disabled={isDeleting}
                className="flex-1 py-4 text-[10px] font-black text-neutral-400 hover:text-white uppercase tracking-widest border border-white/5 hover:bg-white/5 rounded-xl transition-all"
              >
                Cancelar
              </button>
              <button 
                onClick={handleDeleteCompany}
                disabled={isDeleting}
                className="flex-1 py-4 bg-red-600 hover:bg-red-700 disabled:opacity-30 text-white text-[10px] font-black rounded-xl transition-all uppercase tracking-widest shadow-xl flex items-center justify-center gap-3"
              >
                {isDeleting ? (
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <CheckCircle size={16} />
                )}
                <span>{isDeleting ? 'PROCESSANDO...' : 'CONFIRMAR'}</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default App;
