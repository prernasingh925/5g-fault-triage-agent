import { useState } from 'react'
import './App.css'

// ─── SVG Icons ───────────────────────────────────────────────
const IconHome = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
)
const IconSearch = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <circle cx="8.5" cy="8.5" r="5.5" />
    <path d="M15 15l3 3" strokeLinecap="round" />
  </svg>
)
const IconHistory = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <circle cx="10" cy="10" r="8" />
    <path d="M10 6v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconSettings = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
)
const IconChevronLeft = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
    <path d="M13 15l-5-5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconChevronRight = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
    <path d="M7 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconSignal = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
)
const IconArrow = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)
const IconMagnify = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
)
const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
    <path d="M9 3C6.8 3 5 4.8 5 7c0 .7.2 1.4.5 2C3.6 9.5 2 11.1 2 13c0 2.2 1.8 4 4 4h1M15 3c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2 1.9.5 3.5 2.1 3.5 4 0 2.2-1.8 4-4 4h-1" strokeLinecap="round" />
    <path d="M8 12c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4z" />
    <path d="M12 8v1M12 15v1" strokeLinecap="round" />
  </svg>
)
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" />
    <path d="M8 7h8M8 11h6" strokeLinecap="round" />
  </svg>
)
const IconWarning = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
)
const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Mock data ───────────────────────────────────────────────
const SAMPLE_TICKET = `INCIDENT TICKET: INC-20260321-0847
Node: gNB-MUM-347 | Sector: 2 | Band: NR n78 (3.5 GHz)
Location: Mumbai Central, Maharashtra | Operator: Jio 5G SA
Opened: 2026-03-21 09:14 IST | Priority: CRITICAL

OBSERVED SYMPTOMS:
- RLF (Radio Link Failure) count spike: 847 events/hr (threshold: 50)
- PDSCH BLER: 38.4% (acceptable: <5%)
- Average DL SINR: -2.4 dB (baseline: +12.1 dB)
- HO Success Rate: 34% (SLA target: ≥95%)
- DL Throughput: 23 Mbps (baseline: 890 Mbps)
- Active UEs impacted: 2,847
- VoNR call drop rate: 67%
- NAS Registration failures: 412 in last 30 min

ACTIVE ALARMS:
ALM-20260321-001: RRC Setup Failure Rate Critical (CRITICAL)
ALM-20260321-002: PDCP Throughput Degradation (MAJOR)
ALM-20260321-003: PRACH Failure Rate High (MAJOR)

RECENT CHANGES:
- Firmware: v3.4.2 → v3.5.0 deployed 6h ago (2026-03-21 03:00 IST)
- No physical site access in last 72h
- Adjacent cell gNB-MUM-312 reported antenna azimuth adjustment yesterday`

const MOCK_RESULT = {
  faultType: 'Radio Link Failure (RLF)',
  faultTypeSub: 'Uplink/Downlink interference-induced',
  layer5g: 'PHY / L1 → RRC',
  layerSub: 'Physical layer degradation cascading to RRC',
  impactedService: 'VoNR + eMBB Data',
  impactedSub: 'Voice over NR & enhanced Mobile Broadband',
  subscriberImpact: '2,847 active sessions',
  subImpactSub: '~18% of sector capacity',
  slaRisk: '94% breach probability',
  slaRiskSub: 'MTTR window: 23 min remaining',
  escalationSteps: ['L1 NOC', 'L2 RF Engineer', 'L3 RAN Core Team', 'Vendor TAC'],
  hypothesis: `Downlink inter-cell interference from adjacent gNB-MUM-312 (azimuth adjusted yesterday) is the primary suspected cause. The SINR degradation from +12 dB to −2.4 dB aligns with a 35–40° beam overlap on Sector 2. Secondary factor: firmware v3.5.0 deployed 6 hours ago may have altered beamforming coefficients, amplifying susceptibility to the adjacent-cell interference. The PRACH failure spike further indicates uplink path degradation consistent with the inter-cell interference pattern.`,
  confidence: 87,
  playbook: [
    { step: 'Immediate isolation', detail: 'Trigger handover offload for gNB-MUM-347 Sector 2 UEs to gNB-MUM-312 Sector 1 via SON policy. Reduce active load.' },
    { step: 'Revert firmware', detail: 'Roll back v3.5.0 → v3.4.2 on gNB-MUM-347 via O1 interface. Estimated downtime: 4 min. Verify RLF counter post-reboot.' },
    { step: 'RF audit — adjacent cell', detail: 'Dispatch RF team to verify gNB-MUM-312 azimuth configuration. Confirm beam alignment per network design document ND-MUM-BLK3.' },
    { step: 'Beamforming recalibration', detail: 'If firmware revert reduces BLER <5%, run AI-based beamforming optimisation on Sector 2 (tool: BFO-v2). Else escalate to Vendor TAC for L3 diagnostics.' },
    { step: 'KPI validation & SLA report', detail: 'Monitor for 30 min post-fix: SINR >10 dB, HO SR >95%, RLF <50/hr. Close incident and file SLA breach report INC-SLA-347.' },
  ]
}

const HISTORY_ITEMS = [
  { id: 'INC-20260320-1143', node: 'gNB-MUM-212', type: 'Handover Failure', sev: 'P2', time: '20 Mar, 11:43 IST', status: 'Resolved' },
  { id: 'INC-20260319-0821', node: 'gNB-PUN-089', type: 'PDCP Throughput Drop', sev: 'P2', time: '19 Mar, 08:21 IST', status: 'Resolved' },
  { id: 'INC-20260317-1509', node: 'gNB-MUM-104', type: 'PRACH Congestion', sev: 'P3', time: '17 Mar, 15:09 IST', status: 'Resolved' },
  { id: 'INC-20260314-0305', node: 'gNB-DEL-447', type: 'RRC Setup Failure', sev: 'P1', time: '14 Mar, 03:05 IST', status: 'Closed' },
  { id: 'INC-20260310-1730', node: 'gNB-BLR-331', type: 'UE Beam Failure', sev: 'P3', time: '10 Mar, 17:30 IST', status: 'Closed' },
]

// ─── Sidebar ──────────────────────────────────────────────────
function Sidebar({ activePage, onNavigate, expanded, onToggle, mobileOpen }) {
  const navItems = [
    { id: 'home',    label: 'Home',           icon: <IconHome /> },
    { id: 'analyse', label: 'Analyse Fault',  icon: <IconSearch /> },
    { id: 'history', label: 'History',        icon: <IconHistory /> },
    { id: 'settings',label: 'Settings',       icon: <IconSettings /> },
  ]

  return (
    <nav className={`sidebar ${expanded ? 'expanded' : 'collapsed'} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <IconSignal />
        </div>
        {expanded && (
          <div className="sidebar-brand">
            <h2>5G Triage</h2>
            <span>Telecom Intelligence</span>
          </div>
        )}
      </div>

      <div className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            title={!expanded ? item.label : undefined}
          >
            {item.icon}
            {expanded && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="sidebar-collapse-btn" onClick={onToggle} title={expanded ? 'Collapse sidebar' : 'Expand sidebar'}>
          {expanded ? <IconChevronLeft /> : <IconChevronRight />}
          {expanded && <span>Collapse</span>}
        </button>
      </div>
    </nav>
  )
}

// ─── Home page ────────────────────────────────────────────────
function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>5G Fault Triage Agent</h1>
        <p>AI-powered RAN fault diagnostics for 5G networks. Detect, classify and remediate 5G NR incidents in minutes.</p>
        <button className="hero-cta" onClick={() => onNavigate('analyse')}>
          <IconMagnify /> Start Fault Analysis <IconArrow />
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-label">Incidents Resolved</div>
          <div className="stat-card-value green">127</div>
          <div className="stat-card-sub">This month</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Avg. MTTR</div>
          <div className="stat-card-value">18 min</div>
          <div className="stat-card-sub">vs 4.2h manual</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Active P1 Incidents</div>
          <div className="stat-card-value red">2</div>
          <div className="stat-card-sub">Requires attention</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Model Accuracy</div>
          <div className="stat-card-value orange">92.4%</div>
          <div className="stat-card-sub">Root-cause precision</div>
        </div>
      </div>

      <div className="recent-header">
        <div className="recent-title">Recent Incidents</div>
        <button className="view-all-btn" onClick={() => onNavigate('history')}>View all →</button>
      </div>

      <div className="incidents-table">
        <div className="table-row table-header">
          <div>Incident ID</div>
          <div>Description</div>
          <div>Severity</div>
          <div>Status</div>
          <div>Time</div>
        </div>
        {HISTORY_ITEMS.slice(0, 4).map(item => (
          <div className="table-row" key={item.id}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--navy)' }}>{item.id}</div>
            <div style={{ fontSize: 13, color: 'var(--gray-700)' }}>{item.node} — {item.type}</div>
            <div><span className={`sev-badge sev-${item.sev.toLowerCase()}`}>{item.sev}</span></div>
            <div style={{ fontSize: 12.5, color: item.status === 'Resolved' ? 'var(--primary)' : 'var(--gray-500)' }}>{item.status}</div>
            <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Analyse Fault page ───────────────────────────────────────
function AnalysePage() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const loadSample = () => setText(SAMPLE_TICKET)

  const handleAnalyse = async () => {
    if (!text.trim()) return
    setLoading(true)
    setResult(null)

    const systemPrompt = `You are an expert 5G network engineer and NOC analyst. Analyze the following 5G fault description and return a structured triage in strict JSON format only — no markdown, no extra text.

Fault description:
${text}

Return this exact JSON structure:
{
  "severity": "P1 Critical",
  "severityLevel": "P1",
  "faultType": "short fault type name",
  "faultTypeSub": "one-line description of fault type",
  "layer5g": "5G layer affected (e.g. PHY / L1, RRC, PDCP, Core, Transport)",
  "layerSub": "brief explanation of layer impact",
  "impactedService": "e.g. VoNR + eMBB Data",
  "impactedSub": "explanation of impacted service",
  "subscriberImpact": "estimated number of affected users or sessions",
  "subImpactSub": "percentage of capacity or context",
  "slaRisk": "Yes — high breach probability",
  "slaRiskSub": "brief reasoning for SLA assessment",
  "escalationSteps": ["L1 NOC", "L2 RF Engineer", "L3 RAN Core Team", "Vendor TAC"],
  "hypothesis": "detailed root cause hypothesis paragraph explaining what is likely causing this fault and why, referencing specific values from the input",
  "confidence": 85,
  "playbook": [
    { "step": "Action name", "detail": "Specific field-actionable instruction" },
    { "step": "Action name", "detail": "Specific field-actionable instruction" },
    { "step": "Action name", "detail": "Specific field-actionable instruction" },
    { "step": "Action name", "detail": "Specific field-actionable instruction" },
    { "step": "Action name", "detail": "Specific field-actionable instruction" }
  ]
}

Rules:
- severity must be one of: P1 Critical, P2 High, P3 Medium, P4 Low
- severityLevel must be one of: P1, P2, P3, P4
- Use 5G-specific terminology (gNB, NR, RLF, SINR, PDSCH, PRACH, HO, VoNR, eMBB, URLLC, mMTC, RAN, Core, NSA, SA)
- playbook steps must be specific and field-actionable, not generic
- hypothesis must reference specific metrics or values from the input
- confidence should be 0-100 based on clarity of evidence in the input
- If input is not a 5G fault description, return: { "error": "Please enter a valid 5G fault description" }`

    const payload = {
      contents: [{ parts: [{ text: systemPrompt }] }],
      generationConfig: { responseMimeType: 'application/json' }
    }

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        if (res.status === 429 || data.error?.code === 429) {
          throw new Error('High demand right now — please retry in a few seconds.')
        }
        throw new Error(data.error?.message || data.error || 'API request failed.')
      }

      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text
      if (!textResponse) throw new Error('Please enter a valid 5G fault description.')

      let cleanText = textResponse.replace(/^```json/im, '').replace(/```$/im, '').trim()
      let parsed
      try {
        parsed = JSON.parse(cleanText)
        if (parsed.error) throw new Error(parsed.error)
        if (!parsed.faultType || !parsed.hypothesis || !parsed.playbook) throw new Error('Schema failure')
      } catch (err) {
        throw new Error('Please enter a valid 5G fault description.')
      }

      setResult(parsed)
    } catch (e) {
      alert(e.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="analyse-page">
      <div className="input-card">
        <div className="input-card-header">
          <div className="input-card-label">Fault Description / Incident Ticket</div>
          <button className="load-sample-btn" onClick={loadSample}>
            Load Sample Ticket →
          </button>
        </div>
        <textarea
          className="fault-textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste your 5G incident ticket, alarm dump, or fault description here…&#10;&#10;Example: gNB-MUM-347 showing RLF spike, SINR degradation on NR n78, 847 RLF/hr..."
        />
        <button
          className={`analyse-btn${loading ? ' loading' : ''}`}
          onClick={handleAnalyse}
          disabled={loading || !text.trim()}
        >
          {loading ? (
            <><span className="spinner" /> Analysing fault…</>
          ) : (
            <><IconMagnify /> Analyse Fault</>
          )}
        </button>
      </div>

      {result && <ResultsPanel result={result} />}
    </div>
  )
}

// ─── Results Panel ────────────────────────────────────────────
function ResultsPanel({ result }) {
  return (
    <div className="results-section">
      {/* Severity Banner */}
      <div className="p1-banner">
        <div className={`p1-badge ${result.severityLevel === 'P1' ? '' : 'p1-badge-low'}`}>{result.severityLevel || 'P1'} {result.severity?.split(' ')[1] || 'CRITICAL'}</div>
        <div className="p1-text">
          <strong>{result.severity || 'P1 Critical'} — {result.severityLevel === 'P1' ? 'Immediate Action Required' : result.severityLevel === 'P2' ? 'High Priority Response' : 'Standard Response'}</strong>
          <span style={{ fontSize: 12, opacity: 0.85 }}>{result.faultType}</span>
        </div>
        <div className="p1-meta">
          <div style={{ fontWeight: 700, color: result.slaRisk?.startsWith('Yes') ? 'var(--red)' : 'var(--primary)', fontSize: 13 }}>{result.slaRisk?.startsWith('Yes') ? 'SLA BREACH RISK' : 'WITHIN SLA'}</div>
          <div>{result.slaRiskSub}</div>
        </div>
      </div>

      {/* Row 1: Fault Type, 5G Layer, Impacted Service */}
      <div className="cards-grid-3">
        <div className="info-card">
          <div className="card-label">Fault Type</div>
          <div className="card-value">{result.faultType}</div>
          <div className="card-sub">{result.faultTypeSub}</div>
          <span className="card-tag tag-orange"><IconWarning /> RLF Storm</span>
        </div>
        <div className="info-card">
          <div className="card-label">5G Layer</div>
          <div className="card-value">{result.layer5g}</div>
          <div className="card-sub">{result.layerSub}</div>
          <span className="card-tag tag-blue">3GPP TS 38.331</span>
        </div>
        <div className="info-card">
          <div className="card-label">Impacted Service</div>
          <div className="card-value">{result.impactedService}</div>
          <div className="card-sub">{result.impactedSub}</div>
          <span className="card-tag tag-green">Active Monitoring</span>
        </div>
      </div>

      {/* Row 2: Subscriber Impact, SLA Breach Risk, Escalation Path */}
      <div className="cards-grid-3">
        <div className="info-card">
          <div className="card-label">Subscriber Impact</div>
          <div className="card-value">{result.subscriberImpact}</div>
          <div className="card-sub">{result.subImpactSub}</div>
        </div>
        <div className="info-card red-card">
          <div className="card-label">SLA Breach Risk</div>
          <div className="card-value red-val">{result.slaRisk}</div>
          <div className="card-sub">{result.slaRiskSub}</div>
        </div>
        <div className="info-card">
          <div className="card-label">Escalation Path</div>
          <div style={{ marginTop: 6 }}>
            <div className="escalation-steps">
              {result.escalationSteps.map((s, i) => (
                <span key={s} style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="esc-step">{s}</span>
                  {i < result.escalationSteps.length - 1 && <span className="esc-arrow">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Root Cause Hypothesis + Resolution Playbook */}
      <div className="big-cards-grid">
        <div className="big-card">
          <div className="big-card-header">
            <div className="big-card-icon icon-teal"><IconBrain /></div>
            <div>
              <div className="big-card-title">Root Cause Hypothesis</div>
              <div className="big-card-sub">AI-generated analysis</div>
            </div>
          </div>
          <p className="hypothesis-text">{result.hypothesis}</p>
          <div className="confidence-bar-wrap">
            <div className="confidence-label">
              <span>Confidence score</span>
              <strong>{result.confidence}%</strong>
            </div>
            <div className="confidence-bar-bg">
              <div className="confidence-bar-fill" style={{ width: `${result.confidence}%` }} />
            </div>
          </div>
        </div>

        <div className="big-card">
          <div className="big-card-header">
            <div className="big-card-icon icon-navy"><IconBook /></div>
            <div>
              <div className="big-card-title">Resolution Playbook</div>
              <div className="big-card-sub">Recommended remediation steps</div>
            </div>
          </div>
          <ol className="playbook-steps">
            {result.playbook.map((item, i) => (
              <li key={i} className="playbook-step">
                <div className="step-num">{i + 1}</div>
                <div className="step-text">
                  <strong>{item.step}: </strong>{item.detail}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

// ─── History page ─────────────────────────────────────────────
function HistoryPage() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'P1', 'P2', 'P3']

  const filtered = filter === 'All' ? HISTORY_ITEMS : HISTORY_ITEMS.filter(i => i.sev === filter)

  return (
    <div className="history-page">
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>Analysis History</div>
        <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Past fault triage sessions and results</div>
      </div>

      <div className="history-filters">
        {filters.map(f => (
          <button key={f} className={`filter-chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="history-list">
        {filtered.map(item => (
          <div className="history-item" key={item.id}>
            <div>
              <div className="history-item-id">{item.id}</div>
              <div className="history-item-desc">{item.node} — {item.type}</div>
            </div>
            <div className="history-item-right">
              <span className={`sev-badge sev-${item.sev.toLowerCase()}`}>{item.sev}</span>
              <div className="history-item-time">{item.time}</div>
              <div style={{ fontSize: 11.5, color: item.status === 'Resolved' ? 'var(--primary)' : 'var(--gray-400)', fontWeight: 600 }}>{item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Settings page ────────────────────────────────────────────
function SettingsPage() {
  const [toggles, setToggles] = useState({ autoEscalate: true, notifications: true, darkMode: false, telemetry: false })
  const flip = key => setToggles(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="settings-page">
      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 20 }}>Settings</div>

      <div className="settings-section">
        <div className="settings-section-title">AI & Analysis</div>
        <div className="settings-row">
          <div>
            <div className="settings-row-label">Auto-escalation</div>
            <div className="settings-row-desc">Automatically escalate P1 incidents after SLA window expires</div>
          </div>
          <button className={`toggle ${toggles.autoEscalate ? 'on' : ''}`} onClick={() => flip('autoEscalate')} />
        </div>
        <div className="settings-row">
          <div>
            <div className="settings-row-label">AI Model</div>
            <div className="settings-row-desc">Select the inference model for root-cause analysis</div>
          </div>
          <select className="model-select">
            <option>claude-opus-4-6</option>
            <option>claude-sonnet-4-6</option>
            <option>claude-haiku-4-5</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">Notifications</div>
        <div className="settings-row">
          <div>
            <div className="settings-row-label">Push notifications</div>
            <div className="settings-row-desc">Receive alerts for new P1/P2 incidents</div>
          </div>
          <button className={`toggle ${toggles.notifications ? 'on' : ''}`} onClick={() => flip('notifications')} />
        </div>
        <div className="settings-row">
          <div>
            <div className="settings-row-label">Usage telemetry</div>
            <div className="settings-row-desc">Share anonymised usage data to improve model accuracy</div>
          </div>
          <button className={`toggle ${toggles.telemetry ? 'on' : ''}`} onClick={() => flip('telemetry')} />
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">About</div>
        <div className="settings-row">
          <div>
            <div className="settings-row-label">Version</div>
            <div className="settings-row-desc">5G Fault Triage Agent</div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>v1.0.0</div>
        </div>
        <div className="settings-row">
          <div>
            <div className="settings-row-label">AI Triage Engine</div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 600 }}>Active</div>
        </div>
      </div>
    </div>
  )
}

// ─── Top bar ──────────────────────────────────────────────────
const PAGE_TITLES = {
  home: 'Dashboard',
  analyse: 'Analyse Fault',
  history: 'History',
  settings: 'Settings',
}

function TopBar({ onMenuClick }) {
  return (
    <header className="topbar">
      <button className="mobile-menu-btn" onClick={onMenuClick}>
        <IconMenu />
      </button>
      <span className="topbar-title">5G Fault Triage Agent</span>
      <span className="badge badge-uap">
        <span className="badge-dot" />
        AI Triage Engine
      </span>
      <div className="topbar-right">
        <div className="status-indicator">
          <div className="status-dot" />
          <span>System Online</span>
        </div>
      </div>
    </header>
  )
}

// ─── App root ─────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('home')
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (p) => {
    setPage(p)
    setMobileMenuOpen(false)
  }

  const renderPage = () => {
    switch (page) {
      case 'home':     return <HomePage onNavigate={handleNavigate} />
      case 'analyse':  return <AnalysePage />
      case 'history':  return <HistoryPage />
      case 'settings': return <SettingsPage />
      default:         return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="app-layout">
      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />}
      <Sidebar
        activePage={page}
        onNavigate={handleNavigate}
        expanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded(e => !e)}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />
      <div className="main-wrapper">
        <TopBar onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="page-content">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}
