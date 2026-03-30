import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Activity, Database, ShieldCheck, ChevronRight, Hash, 
  User, MessageSquare, Clock, Lightbulb, LightbulbOff, Plus, 
  AlertCircle, Settings, Play, RefreshCw, QrCode, Maximize2,
  Copy, ExternalLink, Layers, CheckCircle, XCircle, Shield, 
  AlertTriangle, Users, Trash2, Check, UserCircle, Building2
} from 'lucide-react';
import { useToast } from './Toast';


// Robust MD5 Helper to avoid variable collisions
const md5 = (string) => {
  const k = [
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
    0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be, 0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
    0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
    0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
    0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
    0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
    0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
    0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391,
  ];

  const s = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
    5, 9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20, 5,  9, 14, 20,
    4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
    6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
  ];

  const rotateLeft = (lValue, iShiftBits) => (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));

  const addUnsigned = (lX, lY) => {
    const lX8 = lX & 0x80000000;
    const lY8 = lY & 0x80000000;
    const lX4 = lX & 0x40000000;
    const lY4 = lY & 0x40000000;
    const lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    if (lX4 | lY4) {
      if (lResult & 0x40000000) return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      return lResult ^ 0x40000000 ^ lX8 ^ lY8;
    }
    return lResult ^ lX8 ^ lY8;
  };

  const F = (x, y, z) => (x & y) | (~x & z);
  const G = (x, y, z) => (x & z) | (y & ~z);
  const H = (x, y, z) => x ^ y ^ z;
  const I = (x, y, z) => y ^ (x | ~z);

  const FF = (a, b, c, d, x, s, ac) => addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(F(b, c, d), addUnsigned(x, ac))), s), b);
  const GG = (a, b, c, d, x, s, ac) => addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(G(b, c, d), addUnsigned(x, ac))), s), b);
  const HH = (a, b, c, d, x, s, ac) => addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(H(b, c, d), addUnsigned(x, ac))), s), b);
  const II = (a, b, c, d, x, s, ac) => addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(I(b, c, d), addUnsigned(x, ac))), s), b);

  const words = [];
  for (let i = 0; i < string.length * 8; i += 8) {
    words[i >> 5] |= (string.charCodeAt(i / 8) & 0xFF) << (i % 32);
  }
  words[string.length >> 2] |= 0x80 << ((string.length % 4) * 8);
  words[(((string.length + 8) >> 6) << 4) + 14] = string.length * 8;

  let a = 0x67452301;
  let b = 0xefcdab89;
  let c = 0x98badcfe;
  let d = 0x10325476;

  for (let i = 0; i < words.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;

    a = FF(a, b, c, d, words[i + 0], 7, k[0]);
    d = FF(d, a, b, c, words[i + 1], 12, k[1]);
    c = FF(c, d, a, b, words[i + 2], 17, k[2]);
    b = FF(b, c, d, a, words[i + 3], 22, k[3]);
    a = FF(a, b, c, d, words[i + 4], 7, k[4]);
    d = FF(d, a, b, c, words[i + 5], 12, k[5]);
    c = FF(c, d, a, b, words[i + 6], 17, k[6]);
    b = FF(b, c, d, a, words[i + 7], 22, k[7]);
    a = FF(a, b, c, d, words[i + 8], 7, k[8]);
    d = FF(d, a, b, c, words[i + 9], 12, k[9]);
    c = FF(c, d, a, b, words[i + 10], 17, k[10]);
    b = FF(b, c, d, a, words[i + 11], 22, k[11]);
    a = FF(a, b, c, d, words[i + 12], 7, k[12]);
    d = FF(d, a, b, c, words[i + 13], 12, k[13]);
    c = FF(c, d, a, b, words[i + 14], 17, k[14]);
    b = FF(b, c, d, a, words[i + 15], 22, k[15]);

    a = GG(a, b, c, d, words[i + 1], 5, k[16]);
    d = GG(d, a, b, c, words[i + 6], 9, k[17]);
    c = GG(c, d, a, b, words[i + 11], 14, k[18]);
    b = GG(b, c, d, a, words[i + 0], 20, k[19]);
    a = GG(a, b, c, d, words[i + 5], 5, k[20]);
    d = GG(d, a, b, c, words[i + 10], 9, k[21]);
    c = GG(c, d, a, b, words[i + 15], 14, k[22]);
    b = GG(b, c, d, a, words[i + 4], 20, k[23]);
    a = GG(a, b, c, d, words[i + 9], 5, k[24]);
    d = GG(d, a, b, c, words[i + 14], 9, k[25]);
    c = GG(c, d, a, b, words[i + 3], 14, k[26]);
    b = GG(b, c, d, a, words[i + 8], 20, k[27]);
    a = GG(a, b, c, d, words[i + 13], 5, k[28]);
    d = GG(d, a, b, c, words[i + 2], 9, k[29]);
    c = GG(c, d, a, b, words[i + 7], 14, k[30]);
    b = GG(b, c, d, a, words[i + 12], 20, k[31]);

    a = HH(a, b, c, d, words[i + 5], 4, k[32]);
    d = HH(d, a, b, c, words[i + 8], 11, k[33]);
    c = HH(c, d, a, b, words[i + 11], 16, k[34]);
    b = HH(b, c, d, a, words[i + 14], 23, k[35]);
    a = HH(a, b, c, d, words[i + 1], 4, k[36]);
    d = HH(d, a, b, c, words[i + 4], 11, k[37]);
    c = HH(c, d, a, b, words[i + 7], 16, k[38]);
    b = HH(b, c, d, a, words[i + 10], 23, k[39]);
    a = HH(a, b, c, d, words[i + 13], 4, k[40]);
    d = HH(d, a, b, c, words[i + 0], 11, k[41]);
    c = HH(c, d, a, b, words[i + 3], 16, k[42]);
    b = HH(b, c, d, a, words[i + 6], 23, k[43]);
    a = HH(a, b, c, d, words[i + 9], 4, k[44]);
    d = HH(d, a, b, c, words[i + 12], 11, k[45]);
    c = HH(c, d, a, b, words[i + 15], 16, k[46]);
    b = HH(b, c, d, a, words[i + 2], 23, k[47]);

    a = II(a, b, c, d, words[i + 0], 6, k[48]);
    d = II(d, a, b, c, words[i + 7], 10, k[49]);
    c = II(c, d, a, b, words[i + 14], 15, k[50]);
    b = II(b, c, d, a, words[i + 5], 21, k[51]);
    a = II(a, b, c, d, words[i + 12], 6, k[52]);
    d = II(d, a, b, c, words[i + 3], 10, k[53]);
    c = II(c, d, a, b, words[i + 10], 15, k[54]);
    b = II(b, c, d, a, words[i + 1], 21, k[55]);
    a = II(a, b, c, d, words[i + 8], 6, k[56]);
    d = II(d, a, b, c, words[i + 15], 10, k[57]);
    c = II(c, d, a, b, words[i + 6], 15, k[58]);
    b = II(b, c, d, a, words[i + 13], 21, k[59]);
    a = II(a, b, c, d, words[i + 4], 6, k[60]);
    d = II(d, a, b, c, words[i + 11], 10, k[61]);
    c = II(c, d, a, b, words[i + 2], 15, k[62]);
    b = II(b, c, d, a, words[i + 9], 21, k[63]);

    a = addUnsigned(a, olda);
    b = addUnsigned(b, oldb);
    c = addUnsigned(c, oldc);
    d = addUnsigned(d, oldd);
  }

  const hex = (num) => {
    let s = "";
    for (let j = 0; j <= 3; j++) {
      const b = (num >>> (j * 8)) & 0xFF;
      s += "0123456789abcdef".charAt((b >> 4) & 0x0F) + "0123456789abcdef".charAt(b & 0x0F);
    }
    return s;
  };
  return hex(a) + hex(b) + hex(c) + hex(d);
};

const CompanyCard = ({ company, index, availableAgents, wahaSessions = [], onToggleAtivo, onUpdateCompany, onEdit, onDelete }) => {
  const { showToast } = useToast();
  const isAtivo = company.ativo;
  const [showSchedule, setShowSchedule] = useState(false);
  const [showAgentEditor, setShowAgentEditor] = useState(false);
  const [showMsgEditor, setShowMsgEditor] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingMsg, setIsSavingMsg] = useState(false);
  const [isLoadingMembers, setIsLoadingMembers] = useState(false);
  const [localInboxId, setLocalInboxId] = useState(company.Número_id || company.inboxId || null);
  const [isCreatingInbox, setIsCreatingInbox] = useState(false);
  
  // States for message editing
  const [localMsg, setLocalMsg] = useState(company.Mensagens || "");
  const [localMsgFora, setLocalMsgFora] = useState(company.msg_fora_de_hora || "");
  
  // Local state for currently linked agents (Fetched live)
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [originalAgentIds, setOriginalAgentIds] = useState([]);

  // States for session creation
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [sessionName, setSessionName] = useState("");
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const [isStartingSession, setIsStartingSession] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [sessionError, setSessionError] = useState("");

  // Fetch current members on mount or when editor opens
  useEffect(() => {
    if (localInboxId) {
      fetchCurrentMembers();
    }
    if (company.Sessão) {
      fetchApps(); // Buscar integrações (Chatwoot Inbox ID)
    }
  }, [localInboxId, company.Sessão]);

  // Countdown effect for session start
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  // Body scroll lock when editing messages OR session modal
  useEffect(() => {
    if (showMsgEditor || showSessionModal) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [showMsgEditor, showSessionModal]);

  const currentWahaSession = wahaSessions.find(s => s.name === company.Sessão);
  const sessionStatus = currentWahaSession ? currentWahaSession.status : 'OFFLINE';

  const fetchApps = async () => {
    if (!company.Sessão) return;
    try {
      const response = await fetch(`/api/waha/api/apps?session=${encodeURIComponent(company.Sessão)}`, {
        headers: { 
          'accept': 'application/json',
          'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T' 
        }
      });
      if (response.ok) {
        const apps = await response.json();
        const chatwootApp = apps.find(app => app.app === 'chatwoot' || app.name === 'chatwoot');
        if (chatwootApp && chatwootApp.config && chatwootApp.config.inboxId) {
          const remoteInboxId = chatwootApp.config.inboxId;
          setLocalInboxId(parseInt(remoteInboxId));
        }
      }
    } catch (error) {
      console.error('[ERROR] Falha ao buscar apps da sessão:', error);
    }
  };

  const handleCreateSession = async () => {
    // Validação estrita: letras maiúsculas/minúsculas, números e hífen (-)
    const isValid = /^[a-zA-Z0-9-]+$/.test(sessionName);
    
    if (!isValid) {
      setSessionError("Nome inválido! Use apenas letras, números e hífens (-).");
      return;
    }

    setIsCreatingSession(true);
    setSessionError("");

    try {
      const response = await fetch('/api/waha/api/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T'
        },
        body: JSON.stringify({ name: sessionName })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao criar sessão');
      }

      // Se criou com sucesso, fecha o modal e atualiza a empresa (se necessário)
      setShowSessionModal(false);
      setSessionName("");
      
      // Opcional: Notificar pai ou atualizar localmente
      if (onUpdateCompany) {
        onUpdateCompany(company.id, { Sessão: sessionName });
      }

    } catch (error) {
      console.error('Error creating session:', error);
      setSessionError(`Erro ao criar sessão: ${error.message || 'Verifique a conexão.'}`);
    } finally {
      setIsCreatingSession(false);
    }
  };
  
  const handleStartSession = async () => {
    if (!company.Sessão || isStartingSession) return;
    setIsStartingSession(true);
    try {
      // Step 1: Force Stop before Starting
      console.log(`[SYNC] Parando sessão ${company.Sessão} por segurança...`);
      await fetch(`/api/waha/api/sessions/${company.Sessão}/stop`, {
        method: 'POST',
        headers: { 'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T' }
      });

      // Step 2: Start
      const response = await fetch(`/api/waha/api/sessions/${company.Sessão}/start`, {
        method: 'POST',
        headers: {
          'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T'
        }
      });
      if (response.ok) {
        console.log(`[SUCCESS] Sessão ${company.Sessão} iniciada.`);
        setCountdown(2); // Iniciar espera de 2 segundos
        fetchSessionStatus();
      } else {
        throw new Error('Falha ao iniciar sessão');
      }
    } catch (error) {
      console.error('[ERROR] Falha ao iniciar sessão:', error);
    } finally {
      setIsStartingSession(false);
    }
  };

  const handleFetchQR = async () => {
    if (!company.Sessão) return;
    setShowQrModal(true);
    setQrData(null);
    try {
      // Tentar buscar o QR com format=image primeiro (padrão WAHA)
      let response = await fetch(`/api/waha/api/sessions/${company.Sessão}/auth/qr?format=image`, {
        headers: {
          'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T',
          'accept': 'image/png, */*'
        }
      });
      
      // Fallback: Tentar o caminho sugerido pelo usuário se der 404
      if (response.status === 404) {
        console.log(`[RETRY] Tentando rota alternativa sem 'sessions/' prefix...`);
        response = await fetch(`/api/waha/api/${company.Sessão}/auth/qr?format=image`, {
          headers: {
            'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T',
            'accept': 'image/png, */*'
          }
        });
      }
      
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const json = await response.json();
          const qrBase64 = json.qr || json.data || json.image;
          if (qrBase64) {
            setQrData(qrBase64.startsWith('data:') ? qrBase64 : `data:image/png;base64,${qrBase64}`);
          }
        } else {
          const blob = await response.blob();
          if (qrData && qrData.startsWith('blob:')) URL.revokeObjectURL(qrData);
          setQrData(URL.createObjectURL(blob));
        }
      } else {
        throw new Error(`Status ${response.status}`);
      }
    } catch (error) {
      console.error('[ERROR] Falha ao buscar QR Code:', error);
    }
  };

  const fetchCurrentMembers = async () => {
    if (!localInboxId) return;
    setIsLoadingMembers(true);
    try {
      const response = await fetch(`/api/chatwoot/api/v1/accounts/1/inbox_members/${localInboxId}`, {
        headers: { 'api_access_token': 'qwFEz9XEHzf3wEFAqR7Qdg4q' }
      });
      if (response.ok) {
        const data = await response.json();
        const members = data.payload || [];
        const memberNames = members.map(m => m.name || m.available_name);
        const memberIds = members.map(m => m.id);
        
        setSelectedAgents(memberNames);
        setOriginalAgentIds(memberIds);
      }
    } catch (error) {
      console.error('[ERROR] Falha ao carregar membros vivos:', error);
    } finally {
      setIsLoadingMembers(false);
    }
  };

  const toggleAgent = (agentName) => {
    if (selectedAgents.includes(agentName)) {
      setSelectedAgents(selectedAgents.filter(a => a !== agentName));
    } else {
      setSelectedAgents([...selectedAgents, agentName]);
    }
  };

  const handleSaveAgents = async () => {
    if (!localInboxId) {
      showToast("Erro: Inbox ID não encontrado para esta empresa.", "error");
      return;
    }

    setIsSaving(true);
    
    // Map NEW selected names back to IDs from the available list
    const selectedIds = availableAgents
      .filter(agent => selectedAgents.includes(agent.name))
      .map(agent => agent.id);

    console.log(`[SYNC] Iniciando sincronização para Inbox ${company.inboxId}`);
    console.log(`[SYNC] Original IDs (to DELETE):`, originalAgentIds);
    console.log(`[SYNC] New IDs (to POST):`, selectedIds);

    try {
      // Step 1: REMOVE ALL original members (Delete logic)
      if (originalAgentIds.length > 0) {
        console.log(`[API] Enviando DELETE para:`, originalAgentIds);
        const delRes = await fetch('/api/chatwoot/api/v1/accounts/1/inbox_members', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'api_access_token': 'qwFEz9XEHzf3wEFAqR7Qdg4q'
          },
          body: JSON.stringify({
            inbox_id: localInboxId.toString(),
            user_ids: originalAgentIds
          })
        });
        console.log(`[API] Resposta DELETE:`, delRes.status);
      }

      // Step 2: ADD NEW selected members (Post logic)
      if (selectedIds.length > 0) {
        console.log(`[API] Enviando POST para:`, selectedIds);
        const postResponse = await fetch('/api/chatwoot/api/v1/accounts/1/inbox_members', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api_access_token': 'qwFEz9XEHzf3wEFAqR7Qdg4q'
          },
          body: JSON.stringify({
            inbox_id: localInboxId.toString(),
            user_ids: selectedIds
          })
        });
        
        if (postResponse.ok) {
          console.log(`[SUCCESS] Agentes postados com sucesso.`);
        } else {
          const errorData = await postResponse.json();
          console.error('[ERROR] Falha no POST:', errorData);
          showToast(`Erro ao salvar (POST): ${errorData.message}`, "error");
        }
      } else {
        console.log(`[SYNC] Nenhum agente selecionado para postar.`);
      }

      setShowAgentEditor(false);
      fetchCurrentMembers(); // Refresh for next time
    } catch (error) {
      console.error('[CRITICAL] Erro na requisição API:', error);
      showToast('Erro crítico ao conectar com o Chatwoot.', "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveMsg = async () => {
    setIsSavingMsg(true);
    try {
      await onUpdateCompany(company.id, {
        Mensagens: localMsg,
        msg_fora_de_hora: localMsgFora
      });
      setShowMsgEditor(false);
    } catch (error) {
      console.error('[ERROR] Falha ao salvar mensagens:', error);
    } finally {
      setIsSavingMsg(false);
    }
  };

  const handleCreateInbox = async () => {
    if (!company.Sessão) return;
    setIsCreatingInbox(true);
    try {
      console.log(`[INBOX] Iniciando processo para: ${company.Sessão}`);
      
      let chatwootId = null;
      let chatwootIdentifier = null;

      // Step 0: Check for existing Inbox in Chatwoot
      console.log(`[INBOX] Passo 0: Verificando se já existe Inbox com nome "${company.Sessão}"...`);
      const listRes = await fetch('/api/chatwoot/api/v1/accounts/1/inboxes', {
        headers: { 'api_access_token': 'qwFEz9XEHzf3wEFAqR7Qdg4q' }
      });

      if (listRes.ok) {
        const inboxes = await listRes.json();
        // The list might be in payload or direct array depending on version, checking both
        const inboxList = inboxes.payload || inboxes;
        const existingInbox = Array.isArray(inboxList) ? inboxList.find(i => i.name === company.Sessão) : null;

        if (existingInbox) {
          chatwootId = existingInbox.id;
          chatwootIdentifier = existingInbox.inbox_identifier;
          console.log(`[INBOX] Inbox existente encontrada: ID ${chatwootId}`);
        }
      }

      // Step 1: Create Inbox if not found
      if (!chatwootId) {
        console.log(`[INBOX] Passo 1: Criando nova Inbox no Chatwoot...`);
        const chatwootRes = await fetch('/api/chatwoot/api/v1/accounts/1/inboxes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api_access_token': 'qwFEz9XEHzf3wEFAqR7Qdg4q'
          },
          body: JSON.stringify({
            name: company.Sessão,
            greeting_enabled: false,
            lock_to_single_conversation: true,
            channel: { type: "api" }
          })
        });

        if (!chatwootRes.ok) throw new Error('Falha ao criar Inbox no Chatwoot');
        const chatwootData = await chatwootRes.json();
        chatwootId = chatwootData.id;
        chatwootIdentifier = chatwootData.inbox_identifier;
        console.log(`[INBOX] Nova Inbox criada: ID ${chatwootId}`);
      }

      // Step 2: Create App in WAHA
      console.log(`[INBOX] Passo 2: Conectando Chatwoot ao WAHA...`);
      const sessionHash = md5(company.Sessão);
      const wahaRes = await fetch('/api/waha/api/apps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'key_HYxidjuC2YNQSzr4fcIlsre54nTGW80T'
        },
        body: JSON.stringify({
          id: `app_${sessionHash}`,
          session: company.Sessão,
          app: "chatwoot",
          config: {
            url: "https://chatwoot.levezaativa.site",
            accountId: 1,
            accountToken: "qwFEz9XEHzf3wEFAqR7Qdg4q",
            inboxId: chatwootId,
            inboxIdentifier: chatwootIdentifier,
            locale: "pt-BR"
          }
        })
      });

      if (!wahaRes.ok) throw new Error('Falha ao configurar App no WAHA');
      const wahaData = await wahaRes.json();
      const wahaAppId = wahaData.id;
      console.log(`[INBOX] WAHA App configurado: ID ${wahaAppId}`);

      // Step 3: Configure Webhook in Chatwoot
      console.log(`[INBOX] Passo 3: Configurando Webhook no Chatwoot...`);
      const webhookUrl = `https://waha-pagah.levezaativa.site/webhooks/chatwoot/${encodeURIComponent(company.Sessão)}/${encodeURIComponent(wahaAppId)}`;
      const patchRes = await fetch(`/api/chatwoot/api/v1/accounts/1/inboxes/${chatwootId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'api_access_token': 'qwFEz9XEHzf3wEFAqR7Qdg4q'
        },
        body: JSON.stringify({
          channel: { webhook_url: webhookUrl }
        })
      });

      if (!patchRes.ok) throw new Error('Falha ao configurar Webhook no Chatwoot');
      console.log(`[INBOX] Webhook configurado com sucesso!`);

      // Refresh state
      setLocalInboxId(chatwootId);
      showToast('Inbox vinculada com sucesso!', 'success');

    } catch (error) {
      console.error('[ERROR] Falha no fluxo de criação de Inbox:', error);
      showToast(`Erro: ${error.message}`, 'error');
    } finally {
      setIsCreatingInbox(false);
    }
  };

  return (
    <div className={`glass-panel p-5 mb-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group relative ${showAgentEditor ? 'z-[60]' : 'z-10'}`}>
      {/* Decorative vertical accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 rounded-l-[1rem] ${isAtivo ? 'bg-brand-success shadow-[2px_0_10px_rgba(16,185,129,0.3)]' : 'bg-neutral-700'}`}></div>

      {/* Column 1: Identity (3/12) */}
      <div className="md:col-span-3 space-y-2">
        <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-all break-words leading-tight">
          {company.Nome || "Entidade Sem Nome"}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md border border-white/5" title="ID do Registro">
            <Hash size={10} className="text-brand-accent" /> {company.id}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md border border-white/5" title="ID da Empresa">
            <Building2 size={10} className="text-brand-accent" /> {company.id_Empresa}
          </div>
          {localInboxId && (
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-2 py-0.5 rounded-md border border-brand-accent/20">
              <Database size={10} /> {localInboxId}
            </div>
          )}
        </div>
      </div>

      {/* Column 2: Status & Session (4/12) */}
      <div className="md:col-span-4 flex items-center gap-4 md:border-l border-white/5 md:pl-6 h-full">
        <div className="flex-1 space-y-2">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Sessão WAHA</div>
          <div className="flex items-center">
            {(!company.Sessão || company.Sessão === 'N/A' || company.Sessão === 'NOME INDISPONÍVEL') ? (
              <button 
                onClick={() => setShowSessionModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-black rounded-xl transition-all border border-brand-accent/20 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl group/btn"
              >
                <Plus size={16} className="group-hover/btn:scale-110 transition-transform" />
                <span>Criar Sessão</span>
              </button>
            ) : (
              <div className="text-xs font-extrabold text-white tracking-tight truncate max-w-[150px] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                {company.Sessão}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className={`status-pill w-fit text-[9px] py-0.5 px-2 ${
              sessionStatus === 'WORKING' ? 'bg-brand-success/20 text-brand-success border border-brand-success/30' :
              sessionStatus === 'FAILED' ? 'bg-brand-error/20 text-brand-error border border-brand-error/30' :
              'bg-neutral-700/50 text-neutral-400 border border-neutral-600'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                sessionStatus === 'WORKING' ? 'bg-brand-success animate-pulse' :
                sessionStatus === 'FAILED' ? 'bg-brand-error' :
                'bg-neutral-500'
              }`} />
              {sessionStatus === 'WORKING' ? 'CONECTADO' : 'DESCONECTADO'}
            </div>
            
            {sessionStatus !== 'WORKING' && sessionStatus !== 'LOADING' && sessionStatus !== 'STARTING' && company.Sessão && (
              <div className="flex gap-1.5 items-center">
                <button 
                  onClick={handleStartSession}
                  disabled={isStartingSession || countdown > 0}
                  className="p-1.5 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-black rounded-lg transition-all shadow-lg flex items-center justify-center"
                  title="Iniciar Sessão"
                >
                  {isStartingSession || countdown > 0 ? (
                    <RefreshCw size={10} className="animate-spin" />
                  ) : (
                    <Play size={10} fill="currentColor" />
                  )}
                </button>
                
                {sessionStatus === 'SCAN_QR_CODE' && countdown === 0 && (
                  <button 
                    onClick={handleFetchQR}
                    className="p-1.5 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-black rounded-lg transition-all shadow-lg flex items-center justify-center"
                    title="Ver QR Code"
                  >
                    <QrCode size={10} />
                  </button>
                )}
              </div>
            )}
            
            {sessionStatus === 'WORKING' && !localInboxId && (
              <div className="flex items-center gap-2 ml-2">
                <button 
                  onClick={handleCreateInbox}
                  disabled={isCreatingInbox}
                  className="flex items-center gap-2 px-3 py-1.5 bg-brand-success/10 hover:bg-brand-success text-brand-success hover:text-black rounded-lg transition-all border border-brand-success/30 text-[9px] font-black uppercase tracking-widest shadow-lg"
                >
                  {isCreatingInbox ? (
                    <RefreshCw size={12} className="animate-spin" />
                  ) : (
                    <Plus size={12} />
                  )}
                  <span>{isCreatingInbox ? 'Criando...' : 'Criar Inbox'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="text-center space-y-3">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">ATIVO</div>
          <motion.button
            onClick={() => onToggleAtivo(company.id)}
            className={`relative w-14 h-7 rounded-full p-1 transition-colors duration-300 ${
              isAtivo ? 'bg-brand-success/20' : 'bg-neutral-800'
            }`}
          >
            <motion.div
              animate={{ x: isAtivo ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`w-5 h-5 rounded-full shadow-lg flex items-center justify-center ${
                isAtivo ? 'bg-brand-success' : 'bg-neutral-600'
              }`}
            >
              <div className={`w-1 h-2.5 rounded-full ${isAtivo ? 'bg-white/40' : 'bg-neutral-700'}`}></div>
            </motion.div>
          </motion.button>
        </div>
      </div>

      <div className="md:col-span-3 min-h-[60px] flex flex-col md:border-l border-white/5 md:pl-6 relative">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
            <User size={12} /> Agentes Vinculados
          </div>
          <button 
            onClick={() => setShowAgentEditor(!showAgentEditor)}
            className={`text-[9px] font-extrabold px-2 py-1 rounded transition-all tracking-wider uppercase border ${
              showAgentEditor 
                ? 'bg-neutral-700 border-neutral-600 text-white' 
                : 'bg-brand-accent/5 border-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:text-black'
            }`}
          >
            {showAgentEditor ? 'Fechar' : 'Gerenciar'}
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {isLoadingMembers ? (
            <div className="flex gap-1">
               <div className="w-16 h-4 bg-neutral-800 rounded animate-pulse"></div>
               <div className="w-12 h-4 bg-neutral-800 rounded animate-pulse delay-75"></div>
            </div>
          ) : (
            selectedAgents.length > 0 ? (
              selectedAgents.map((agent, i) => (
                <span key={i} className="text-[10px] font-semibold text-neutral-300 bg-neutral-800/80 px-2 py-0.5 rounded border border-white/5 max-w-[120px] truncate">
                  {agent}
                </span>
              ))
            ) : (
              <span className="text-[10px] font-bold text-brand-warning/80 uppercase italic tracking-wider">Aguardando Vinculação</span>
            )
          )}
        </div>

        {/* Floating Agent Editor */}
        {showAgentEditor && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute top-full left-0 md:left-8 right-0 mt-2 z-50 p-4 bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
            style={{ minWidth: '240px' }}
          >
            <div className="flex flex-col h-[250px] gap-3">
              <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.2em] pb-2 border-b border-white/5">
                Selecione os Agentes
              </div>
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-1">
                {availableAgents.map((agent) => {
                  const isSelected = selectedAgents.includes(agent.name);
                  return (
                    <button
                      key={agent.id}
                      onClick={() => toggleAgent(agent.name)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg border transition-all ${
                        isSelected 
                          ? 'bg-brand-accent/10 border-brand-accent/30 text-white' 
                          : 'bg-white/5 border-transparent text-neutral-400 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-[10px] font-bold truncate pr-2">{agent.name}</span>
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center transition-colors ${isSelected ? 'bg-brand-accent' : 'bg-neutral-800'}`}>
                        {isSelected && <span className="text-black text-[9px] font-bold">✓</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-2 pt-2 border-t border-white/5">
                <button 
                  onClick={() => setShowAgentEditor(false)}
                  className="flex-1 py-2 text-[9px] font-bold text-neutral-400 hover:text-white uppercase transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleSaveAgents}
                  disabled={isSaving}
                  className="flex-1 py-2 text-[9px] font-bold bg-brand-accent hover:bg-amber-600 text-black rounded-lg transition-all uppercase disabled:opacity-50 shadow-lg shadow-brand-accent/10"
                >
                  {isSaving ? 'Salvando...' : 'Confirmar'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Column 4: Controls (2/12) */}
      <div className="md:col-span-2 flex flex-row md:flex-col gap-2 justify-center md:pl-6 md:border-l border-white/5 h-full relative">
        <button 
          onClick={() => setShowMsgEditor(!showMsgEditor)}
          className={`flex items-center justify-center gap-2 text-[10px] font-bold py-2 rounded-lg transition-all border ${
            showMsgEditor 
              ? 'bg-neutral-700 border-neutral-600 text-white' 
              : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-brand-accent'
          }`}
        >
          <MessageSquare size={14} /> {showMsgEditor ? 'Fechar' : 'Mensagens'}
        </button>
        <button 
          onClick={() => setShowSchedule(!showSchedule)}
          className={`flex items-center justify-center gap-2 text-[10px] font-bold py-2 rounded-lg transition-all border ${
            showSchedule 
              ? 'bg-neutral-700 border-neutral-600 text-white' 
              : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:border-white/20'
          }`}
        >
          <Clock size={14} /> {showSchedule ? 'Fechar' : 'Horários'}
        </button>
        <button 
          onClick={onEdit}
          className="flex items-center justify-center gap-2 text-[10px] font-black py-2.5 bg-brand-accent/5 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-black rounded-lg transition-all shadow-lg shadow-brand-accent/5 uppercase tracking-widest group/edit"
        >
          <Settings size={14} className="group-hover/edit:rotate-90 transition-transform duration-500" /> Editar
        </button>
        <button 
          onClick={onDelete}
          className="flex items-center justify-center gap-2 text-[10px] font-black py-2.5 bg-red-500/5 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all shadow-lg shadow-red-500/5 uppercase tracking-widest group/delete"
        >
          <Trash2 size={14} className="group-hover/delete:scale-110 transition-transform" /> Deletar
        </button>

        {/* Modal Editor de Mensagens (VISTA SPLIT FULL-SCREEN REAL) */}
        {showMsgEditor && createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center w-screen h-screen">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/98 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-full flex flex-col bg-[#050505] overflow-hidden"
            >
              {/* Header Ultra-Compacto */}
              <div className="px-10 py-4 border-b border-white/5 flex items-center justify-between bg-black">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-brand-accent rounded-xl text-black shadow-lg shadow-brand-accent/20">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white uppercase tracking-tighter leading-none">Editor de Mensagens</h2>
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">
                      Instância: {company.Nome}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => {
                      setLocalMsg(company.Mensagens || "");
                      setLocalMsgFora(company.msg_fora_de_hora || "");
                      setShowMsgEditor(false);
                    }}
                    className="text-[10px] font-black text-neutral-300 hover:text-white uppercase tracking-widest transition-all px-6 py-3 border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.08] rounded-xl shadow-xl"
                  >
                    Descartar Alterações (Esc)
                  </button>
                  <button 
                    onClick={handleSaveMsg}
                    disabled={isSavingMsg}
                    className="px-8 py-3 bg-brand-accent hover:bg-amber-600 text-black text-[10px] font-black rounded-xl transition-all uppercase tracking-[0.2em] disabled:opacity-50 flex items-center gap-3 shadow-2xl shadow-brand-accent/30"
                  >
                    {isSavingMsg ? (
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    ) : (
                      <ChevronRight size={14} />
                    )}
                    <span>{isSavingMsg ? 'Salvando...' : 'Salvar Alterações'}</span>
                  </button>
                </div>
              </div>

              {/* Split Content Body Maximizado */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-x divide-white/5 overflow-hidden">
                {/* Side A: Mensagem Principal */}
                <div className="flex flex-col p-8 space-y-4 overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                      <Activity size={16} />
                    </div>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Mensagem Principal</span>
                  </div>
                  <textarea 
                    value={localMsg}
                    onChange={(e) => setLocalMsg(e.target.value)}
                    className="flex-1 bg-black/40 border border-white/5 rounded-[2rem] p-8 text-base text-white/90 focus:outline-none focus:border-brand-accent/30 transition-all resize-none custom-scrollbar font-medium leading-[1.6] shadow-2xl shadow-black/50"
                    placeholder="Escreva a mensagem mestre..."
                  />
                </div>

                {/* Side B: Mensagem Fora de Hora */}
                <div className="flex flex-col p-8 space-y-4 overflow-hidden bg-white/[0.005]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400">
                      <Clock size={16} />
                    </div>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Mensagem Fora de Hora</span>
                  </div>
                  <textarea 
                    value={localMsgFora}
                    onChange={(e) => setLocalMsgFora(e.target.value)}
                    className="flex-1 bg-black/40 border border-white/5 rounded-[2rem] p-8 text-base text-white/90 focus:outline-none focus:border-brand-accent/30 transition-all resize-none custom-scrollbar font-medium leading-[1.6] shadow-2xl shadow-black/50"
                    placeholder="Mensagem de ausência..."
                  />
                </div>
              </div>
              
              {/* Info Bar Compacta */}
              <div className="px-10 py-3 bg-black border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-8 text-[9px] font-bold text-neutral-600 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-success"></div>
                    Sistema Online
                  </div>
                  <div>ID: {company.id}</div>
                </div>
                <div className="text-[9px] font-bold text-neutral-800 uppercase tracking-[0.4em]">
                  Liquid Command Center
                </div>
              </div>
            </motion.div>
          </div>,
          document.body
        )}
      </div>

      {/* Schedule Dropdown Content */}
      {showSchedule && (
        <div className="md:col-span-12 mt-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1.5 bg-brand-accent/10 text-brand-accent rounded-md">
              <Clock size={12} />
            </div>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">Disponibilidade Semanal</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'].map((day) => {
              const slots = company.horario?.[day];
              const isActive = slots && slots.length > 0;
              return (
                <div key={day} className={`flex flex-col gap-2 p-3 rounded-xl border transition-all ${isActive ? 'bg-brand-success/5 border-brand-success/20' : 'bg-neutral-900/50 border-white/5 opacity-60'}`}>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isActive ? 'text-brand-success' : 'text-neutral-500'}`}>
                    {day === 'terca' ? 'Terça' : day === 'sabado' ? 'Sábado' : day}
                  </span>
                  {isActive ? (
                    slots.map((slot, i) => (
                      <div key={i} className="text-[10px] font-bold text-white bg-neutral-800/80 px-2 py-1 rounded text-center border border-white/5">
                        {slot.inicio} - {slot.fim}
                      </div>
                    ))
                  ) : (
                    <div className="text-[9px] font-bold py-1 bg-neutral-800/30 text-neutral-600 rounded text-center uppercase tracking-tighter">Off</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Modal de Criação de Sessão */}
      {showSessionModal && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSessionModal(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 max-w-lg w-full shadow-[0_0_100px_rgba(255,191,0,0.1)] overflow-hidden"
          >
            {/* Design Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl rounded-full translate-x-16 -translate-y-16" />
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-brand-accent rounded-2xl text-black">
                  <Plus size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Criar Nova Sessão</h2>
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">Conectar WhatsApp via WAHA</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] ml-4">Nome da Sessão</label>
                  <input 
                    type="text"
                    value={sessionName}
                    onChange={(e) => {
                      const sanitized = e.target.value.replace(/[^a-zA-Z0-9-]/g, '');
                      setSessionName(sanitized);
                      setSessionError("");
                    }}
                    placeholder="ex: sessao-cliente-vendas"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-lg text-white placeholder:text-neutral-700 focus:outline-none focus:border-brand-accent/30 transition-all font-medium"
                  />
                  {sessionError && (
                    <div className="flex items-center gap-2 mt-2 ml-4 text-brand-error text-[10px] font-bold uppercase tracking-widest">
                      <AlertCircle size={14} />
                      {sessionError}
                    </div>
                  )}
                  <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest leading-relaxed mt-4 ml-4">
                    Regra: Apenas letras, números e hífens (-). <br/>
                    Sem espaços, acentos ou caracteres especiais.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button 
                  onClick={() => {
                    setShowSessionModal(false);
                    setSessionName("");
                    setSessionError("");
                  }}
                  className="flex-1 py-4 text-[10px] font-black text-neutral-400 hover:text-white uppercase tracking-widest transition-all rounded-xl border border-white/5 hover:bg-white/5"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleCreateSession}
                  disabled={isCreatingSession || !sessionName}
                  className="flex-1 py-4 bg-brand-accent hover:bg-amber-600 disabled:opacity-30 text-black text-[10px] font-black rounded-xl transition-all uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl"
                >
                  {isCreatingSession ? (
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    <ChevronRight size={16} />
                  )}
                  <span>{isCreatingSession ? "Criando..." : "Confirmar Criação"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>,
        document.body
      )}

      {/* Modal de QR Code */}
      {showQrModal && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (qrData) URL.revokeObjectURL(qrData);
              setShowQrModal(false);
            }}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative bg-[#050505] border border-white/10 rounded-[3rem] p-10 max-w-sm w-full shadow-[0_0_150px_rgba(255,191,0,0.15)] text-center overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 text-brand-accent mb-2">
                    <QrCode size={24} />
                    <h2 className="text-xl font-black text-white uppercase tracking-tighter">QR Code de Authenticaton</h2>
                </div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-relaxed">
                  Escaneie com seu WhatsApp para conectar <br/>
                  Sessão: <span className="text-white font-black">{company.Sessão}</span>
                </p>
              </div>

              <div className="relative w-64 h-64 bg-white rounded-3xl p-4 shadow-inner flex items-center justify-center overflow-hidden group">
                {qrData ? (
                  <img src={qrData} alt="WhatsApp QR Code" className="w-full h-full object-contain image-rendering-pixelated" />
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-2 border-neutral-200 border-t-brand-accent rounded-full animate-spin"></div>
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Gerando...</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <Maximize2 size={32} className="text-white animate-pulse" />
                </div>
              </div>

              <div className="w-full space-y-4">
                  <button 
                    onClick={handleFetchQR}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold rounded-2xl transition-all border border-white/5 uppercase tracking-widest"
                  >
                    <RefreshCw size={14} /> Atualizar QR Code
                  </button>
                  <button 
                    onClick={() => {
                        if (qrData) URL.revokeObjectURL(qrData);
                        setShowQrModal(false);
                    }}
                    className="w-full py-4 text-[10px] font-black text-neutral-500 hover:text-white uppercase tracking-widest transition-all rounded-2xl"
                  >
                    Fechar
                  </button>
              </div>
            </div>
            
            {/* Decorative Scan Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-accent/30 animate-[scan_3s_linear_infinite]" />
          </motion.div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default CompanyCard;
